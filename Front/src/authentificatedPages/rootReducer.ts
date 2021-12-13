import { combineReducers } from '@reduxjs/toolkit';
import auth from 'features/auth/authSlice';
import deckCreation from 'features/DeckCreation/slice';
import searchCards from 'features/SearchCards/slice';
import configHandler from 'features/ConfigHandler/slice';

const rootReducer = combineReducers({
  auth,
  deckCreation,
  searchCards,
  configHandler,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
