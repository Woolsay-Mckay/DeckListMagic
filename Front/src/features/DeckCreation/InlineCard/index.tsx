import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'authentificatedPages/rootReducer';

import { EnhancedCard } from 'models/deckTypes';
import styles from './style.module.scss';
import { updateText, searchCards } from '../../SearchCards/slice';

type AppProps = {
  card: EnhancedCard;
};
export default ({ card }: AppProps): JSX.Element | null => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.deckCreation);
  const { deckListConfig } = state;

  if (!deckListConfig) return null;

  // const { maxCardsPerName } = deckListConfig;
  const { types, supertypes } = card;

  let quantity = `(${card.quantity})`;
  if (types && supertypes && types.includes('Land') && supertypes.includes('Basic')) {
    quantity = `(${card.quantity})`;
  }

  return (
    <div className={styles.card}>
      <span
        className={styles['card-imageContainer']}
        onClick={() => {
          dispatch(updateText(card.name));
          dispatch(searchCards());
        }}
      >
        <img
          alt={card.name || 'Inconnu'}
          className={styles['card-image']}
          src={card.imageUrl || '/images/nocard.jpg'}
        />
      </span>
      <span style={{ float: 'right' }}>
        {card.name} {quantity}
      </span>
    </div>
  );
};
