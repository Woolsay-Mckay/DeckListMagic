// https://magic.wizards.com/en/game-info/gameplay/formats/modern

// import { Card } from 'mtgsdk-ts';
import BaseDeckType from './baseDeckType';
import { EnhancedCard, DeckConfig } from '../deckTypes';

export default class Modern extends BaseDeckType {
  // constructor() {
  //   super();
  //   this.maxCardsPerName = 4;
  //   this.minCards = 60;
  // }

  type = 'Modern';
  static type = 'Modern';
  listCount = 1;
  mainDeck: EnhancedCard[] = [];
  sideDeck: EnhancedCard[] = [];

  mainDeckConfig: DeckConfig = {
    name: 'Main',
    minCards: 60,
  };
  sideDeckConfig: DeckConfig = {
    name: 'Side',
    maxCards: 15,
  };

  hasCommander = false;
  commander = null;

  blackListedCards: string[] = [];

  forbidenCardsTypes: string[] = ['Plane'];

  minLands = null;
  maxLands = null;
  maxCardsPerName = 4;
  minCards = null;
  maxCards = null;

  // canAddCard(card: Card, listIndex: number): boolean {
  //   // Have to add first the commander!
  //   // if (!this.commander) return false;
  //   return super.canAddCard(card, listIndex);

  //   // == LANDS = unlimited
  //   // supertypes	[ "Basic" ]
  //   // types	[ "Land" ]

  //   // No need blacklisted
  //   // legalities	[ { format: "Modern", legality: "Legal" }]

  //   return true;
  // }

  // Side = 15 max
}
