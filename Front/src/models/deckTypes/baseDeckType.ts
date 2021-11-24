// https://magic.wizards.com/fr/content/commander-format

import { Card } from 'mtgsdk-ts';
import { EnhancedCard, DeckListConfig, DeckConfig } from '.';

export default abstract class BaseDeckType implements DeckListConfig {
  constructor({ id = '', name }: { id?: string; name: string }) {
    this.id = id;
    this.name = name;
  }

  id: string;
  name: string;
  abstract mainDeck: EnhancedCard[];
  abstract sideDeck: EnhancedCard[];
  abstract type: string;
  abstract mainDeckConfig: DeckConfig | null;
  abstract sideDeckConfig: DeckConfig | null;

  abstract blackListedCards?: string[];
  abstract forbidenCardsTypes?: string[];

  abstract minLands?: number | null | undefined;
  abstract maxLands?: number | null | undefined;
  abstract maxCardsPerName?: number | null | undefined;
  abstract minCards?: number | null | undefined;
  abstract maxCards?: number | null | undefined;

  canAddCardToMainDeck(card: Card): boolean {
    return this.canAddCard(card, this.mainDeck, this.mainDeckConfig);
  }

  canAddCardToSideDeck(card: Card): boolean {
    return this.canAddCard(card, this.sideDeck, this.sideDeckConfig);
  }

  GenericFilter = ({
    card,
    decks,
    blackListedCards,
    forbidenCardsTypes,
    maxCards,
    maxCardsPerName,
    maxLands,
  }: {
    card: Card;
    decks: EnhancedCard[][];
    blackListedCards: string[] | null;
    forbidenCardsTypes: string[] | null;
    maxCards: number | null;
    maxCardsPerName: number | null;
    maxLands: number | null;
  }): boolean => {
    const { types, supertypes, legalities, name } = card;

    // Legal?
    if (legalities) {
      if (legalities.filter(({ format, legality }) => format === this.type && legality === 'Legal').length === 0)
        return false;
    }

    // Blacklisted?
    if (blackListedCards && blackListedCards.includes(name)) return false;

    // ForbidenType?
    if (forbidenCardsTypes)
      for (var i = 0; i < forbidenCardsTypes.length; i++) {
        if (forbidenCardsTypes && forbidenCardsTypes.includes(types[i])) return false;
      }

    const [firstDeck = null, ...remainingDecks] = decks;
    if (!firstDeck) return false;

    // Concat all decks in one
    const extractMinCard = ({ name, type, quantity }: EnhancedCard) => ({ name, type, quantity });
    const concatedDecks = firstDeck.map(extractMinCard);
    remainingDecks.forEach((deck) => {
      deck.forEach((card) => {
        const index = concatedDecks.findIndex((c) => c.name === card.name);
        if (index !== -1) {
          concatedDecks[index].quantity += card.quantity;
        } else {
          concatedDecks.push(extractMinCard(card));
        }
      });
    });

    // Do not exceed max card limit
    const allCardsCount = concatedDecks.reduce((sum, { quantity }) => sum + quantity, 0);
    if (maxCards && allCardsCount >= maxCards) return false;

    if (types.includes('Land') && supertypes != null && supertypes.includes('Basic')) {
      // Check for lands type, check global lands count limit
      if (maxLands && typeof maxLands === 'number') {
        const lands = concatedDecks.filter(({ type }) => type === 'Land');
        const count = lands.reduce((sum, { quantity }) => sum + quantity, 0);

        if (count >= maxLands) return false;
      }
    } else {
      // Check for other card to not raise the count limit
      if (maxCardsPerName) {
        const existingCard = concatedDecks.find(({ name }) => name === card.name);

        if (existingCard && existingCard.quantity >= maxCardsPerName) return false;
      }
    }

    return true;
  };

  canAddCard(card: Card, deck: EnhancedCard[], config: DeckConfig | null): boolean {
    // Global check
    if (
      !this.GenericFilter({
        card,
        decks: [this.mainDeck, this.sideDeck],
        blackListedCards: this.blackListedCards || null,
        forbidenCardsTypes: this.forbidenCardsTypes || null,
        maxCards: this.maxCards || null,
        maxCardsPerName: this.maxCardsPerName || null,
        maxLands: this.maxLands || null,
      })
    )
      return false;

    // Specific deck check
    if (config) {
      const { blackListedCards, forbidenCardsTypes, maxCards, maxCardsPerName, maxLands } = config;
      if (
        !this.GenericFilter({
          card,
          decks: [deck],
          blackListedCards: blackListedCards || null,
          forbidenCardsTypes: forbidenCardsTypes || null,
          maxCards: maxCards || null,
          maxCardsPerName: maxCardsPerName || null,
          maxLands: maxLands || null,
        })
      )
        return false;
    }

    return true;
  }
}
