import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import classnames from 'classnames';

import { RootState } from 'authentificatedPages/rootReducer';
import Cards from './InlineCards';

type AppProps = { className?: string | undefined };
export default ({ className }: AppProps): JSX.Element => {
  const state = useSelector((state: RootState) => state.deckCreation);
  const { loading, deckListConfig, selectedList } = state;

  if (loading) return <Spinner animation="border" className={className} />;
  if (!deckListConfig) return <div className={className}>No deck config</div>;

  const { mainDeck, sideDeck, maxCards } = deckListConfig;

  const currentDeck = selectedList == 0 ? mainDeck : sideDeck;

  if (!currentDeck.length)
    return (
      <div className={classnames(className, 'text-right')}>
        <div>Cards: 0/{maxCards || '∞'}</div>
        No card
      </div>
    );

  const nbSelectedCards = currentDeck.reduce((sum, card) => sum + card.quantity, 0);
  return (
    <div className={classnames(className, 'text-right')}>
      <div>
        Cards: {nbSelectedCards}/{maxCards || '∞'}
      </div>
      <Cards cards={currentDeck} />
    </div>
  );
};
