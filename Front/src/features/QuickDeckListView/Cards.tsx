import React from 'react';
import { EnhancedCard } from 'models/deckTypes';

import styles from './style.module.scss';
import FlexGrid from 'components/FlexGrid';
import FlexGridElement from 'components/FlexGridElement';
import CardImage from 'components/CardImage';

type AppProps = {
  cards: EnhancedCard[];
};
export default ({ cards }: AppProps): JSX.Element => (
  <FlexGrid>
    {cards.map((card, i) => (
      <FlexGridElement key={i}>
        <CardImage alt={card.name} url={card.imageUrl || ''} />
        <p className={styles.cardDescription}>
          {card.quantity} - {card.name}
        </p>
      </FlexGridElement>
    ))}
  </FlexGrid>
);
