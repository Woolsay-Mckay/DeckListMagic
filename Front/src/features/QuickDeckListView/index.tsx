import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { RootState } from 'authentificatedPages/rootReducer';

import Cards from './Cards';

type AppProps = {
  className?: string;
};
export default ({ className }: AppProps): JSX.Element | null => {
  const state = useSelector((state: RootState) => state.deckCreation);
  const { deckListConfig } = state;

  if (!deckListConfig) return null;
  const { mainDeck, sideDeck, maxCards, mainDeckConfig, sideDeckConfig } = deckListConfig;

  const nbMainDeckCards = mainDeck.reduce((sum, card) => sum + card.quantity, 0);
  const nbSideDeckCards = sideDeck.reduce((sum, card) => sum + card.quantity, 0);
  return (
    <div className={classNames(className, 'bg-light')}>
      <div>
        Nombre de carte total: {nbMainDeckCards + nbSideDeckCards}
        {maxCards ? `/${maxCards}` : ''}
      </div>

      <h2>
        Main Deck ({nbMainDeckCards}
        {mainDeckConfig?.maxCards ? `/${mainDeckConfig?.maxCards}` : ''})
      </h2>
      <Cards cards={mainDeck} />

      {!!sideDeckConfig && (
        <>
          <h2>
            Side Deck ({nbSideDeckCards}
            {sideDeckConfig?.maxCards ? `/${sideDeckConfig?.maxCards}` : ''})
          </h2>
          <Cards cards={sideDeck} />
        </>
      )}
    </div>
  );
};
