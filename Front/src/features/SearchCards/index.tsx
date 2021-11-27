import React from 'react';
import { Card } from 'mtgsdk-ts';
// import Spinner from 'react-bootstrap/Spinner';

import CardList from './CardList';
import SearchInput from './SearchInput';

type AppProps = {
  className?: string;
  canAddCard?: (card: Card) => boolean;
  addCard?: (card: Card) => void;
  canRemoveCard?: (card: Card) => boolean;
  removeCard?: (card: Card) => void;
};

export default ({
  className,
  canAddCard = (): boolean => false,
  addCard = (): null => null,
  canRemoveCard = (): boolean => false,
  removeCard = (): null => null,
}: AppProps): JSX.Element => {
  return (
    <div className={className}>
      Rechercher une carte
      <SearchInput />
      <CardList canAddCard={canAddCard} addCard={addCard} canRemoveCard={canRemoveCard} removeCard={removeCard} />
    </div>
  );
};
