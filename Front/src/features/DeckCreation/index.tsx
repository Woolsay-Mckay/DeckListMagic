import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Card } from 'mtgsdk-ts';

import { RootState } from 'authentificatedPages/rootReducer';
import SearchCards from 'features/SearchCards';
// import Spinner from 'react-bootstrap/Spinner';
import Deck from './DeckList';

import { newDeck, addCard, removeCard } from './slice';
import styles from './style.module.scss';
import Mordern from './deckTypes/mordern';
import Test from './deckTypes/test';

export default (): JSX.Element | null => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.deckCreation);
  const { deckListConfig, selectedList } = state;

  const iniMordernDeck = (): void => {
    dispatch(newDeck(new Mordern()));
  };
  const iniTestDeck = (): void => {
    dispatch(newDeck(new Test()));
  };

  let currentDeck: string[];
  if (deckListConfig) {
    const { lists } = deckListConfig;
    currentDeck = lists[selectedList].map(({ name }) => name);
  }

  const canAddCard = (card: Card): boolean => {
    if (!deckListConfig) return false;
    return true;
    // return currentDeck.indexOf(card.id) == -1;
  };
  const canRemoveCard = (card: Card): boolean => {
    if (!deckListConfig) return false;
    return currentDeck.indexOf(card.name) >= 0;
  };

  return (
    <div>
      <div>Deck name</div>
      <div>
        Deck action (save, load, ...)
        <Button variant="primary" className="mt-4" size="lg" onClick={iniMordernDeck}>
          Init commander deck
        </Button>
        <Button variant="primary" className="mt-4" size="lg" onClick={iniTestDeck}>
          Init test deck
        </Button>
        La suite
      </div>

      {deckListConfig ? (
        <div className={styles.container}>
          <div className={styles.searchContainer}>
            <SearchCards
              canAddCard={canAddCard}
              addCard={(card: Card): void => {
                dispatch(addCard(card));
              }}
              canRemoveCard={canRemoveCard}
              removeCard={(card: Card): void => {
                dispatch(removeCard(card));
              }}
            />
          </div>
          <Deck />
        </div>
      ) : null}
    </div>
  );
};
