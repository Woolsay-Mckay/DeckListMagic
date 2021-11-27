import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Card } from 'mtgsdk-ts';

import { AppThunk, AppDispatch } from 'authentificatedPages/store';
import { SearchCards, Error, CardSearchServerResponse } from './types';
import { decodeLinksFromHeader } from 'utils/apiUtils';
import { RootState } from 'authentificatedPages/rootReducer';

const initialState: SearchCards = {
  cardsFound: [],
  searchText: '',
  loading: false,
  error: undefined,
  requestId: 0,
};

const slice = createSlice({
  name: 'searchCards',
  initialState,
  reducers: {
    updateText(state: SearchCards, action: PayloadAction<string>): void {
      state.searchText = action.payload;
    },
    searchCards(state: SearchCards, action: PayloadAction<number>): void {
      state.loading = true;
      state.requestId = action.payload;
    },
    searchCardsSuccess(state: SearchCards, action: PayloadAction<Card[]>): void {
      state.loading = false;
      state.cardsFound = action.payload;
    },
    searchCardsPush(state: SearchCards, action: PayloadAction<Card[]>): void {
      state.loading = false;
      state.cardsFound = state.cardsFound.concat(action.payload);
      const cardNames = state.cardsFound.map(({ name }) => name);
      state.cardsFound = state.cardsFound.filter(({ name }, i) => cardNames.indexOf(name) === i);
    },
    searchCardsError(state: SearchCards, action: PayloadAction<Error>): void {
      state.loading = false;
      state.cardsFound = [];
      state.error = action.payload;
    },
  },
});

export const { updateText } = slice.actions;
export default slice.reducer;

// For mock and demo
// const timeout = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

// Load up to 100 cards
export const searchCards = (): AppThunk => async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
  try {
    let { requestId: originRequestId, searchText: name } = getState().searchCards;
    originRequestId = originRequestId + 1;
    dispatch(slice.actions.searchCards(originRequestId));

    let nextRequest: string = `https://api.magicthegathering.io/v1/cards?name=${encodeURI(name)}`;
    let hasNext = true;
    let isFirst = true;
    do {
      // See https://github.com/MagicTheGathering/mtg-sdk-typescript
      // const cards = await Magic.Cards.where({ name: encodeURI(name) });
      const {
        data: { cards },
        headers,
        status,
      } = await axios.get<CardSearchServerResponse>(nextRequest);

      // Check if success and if the request is alway expexted
      if (status === 200 && getState().searchCards.requestId === originRequestId) {
        if (isFirst) {
          dispatch(
            slice.actions.searchCardsSuccess(
              // Filter all cards to remove CardName duplicates
              cards.filter(({ name: refName }, pos, arr) => arr.map(({ name }) => name).indexOf(refName) === pos),
            ),
          );
          isFirst = false;
        } else {
          dispatch(
            slice.actions.searchCardsPush(
              // Filter all cards to remove CardName duplicates
              cards.filter(({ name: refName }, pos, arr) => arr.map(({ name }) => name).indexOf(refName) === pos),
            ),
          );
        }

        const links = decodeLinksFromHeader(headers.link);
        if (links.next) {
          nextRequest = links.next;
        } else {
          hasNext = false;
        }
      } else {
        hasNext = false;
      }
    } while (hasNext && getState().searchCards.cardsFound.length < 100);
  } catch (e) {
    dispatch(slice.actions.searchCardsError(e));
  }
};
