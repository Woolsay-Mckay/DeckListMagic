import React from 'react';
import { Card } from 'mtgsdk-ts';

import CardComponent from 'components/Card';
import FlexGrid from 'components/FlexGrid';
import FlexGridElement from 'components/FlexGridElement';

type AppProps = {
  cards: Card[];
  className?: string | undefined;
  small?: boolean | undefined;
  canAddCard?: (card: Card) => boolean;
  addCard?: (card: Card) => void;
  canRemoveCard?: (card: Card) => boolean;
  removeCard?: (card: Card) => void;
};
export default ({
  cards,
  className,
  canAddCard = (): boolean => false,
  addCard = (): null => null,
  canRemoveCard = (): boolean => false,
  removeCard = (): null => null,
}: AppProps): JSX.Element => (
  <FlexGrid className={className}>
    {cards.map((card, i) => (
      <FlexGridElement key={i}>
        <CardComponent
          card={card}
          canAddCard={canAddCard}
          addCard={addCard}
          canRemoveCard={canRemoveCard}
          removeCard={removeCard}
        />
      </FlexGridElement>
    ))}
  </FlexGrid>
);
