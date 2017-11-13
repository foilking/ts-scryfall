import { combineReducers } from 'redux';
import { Card, SearchTerms, Set, CardSymbol, CardsResponse } from '../model';
import { cardsReducer } from './cards';
import { cardReducer } from './card';
import { cardSymbolsReducer } from './cardSymbols';
import { searchTermsReducer } from './searchTerms';
import { setsReducer } from './sets';

export interface State {
  cardsResult: CardsResponse;
  card: Card;
  sets: Set[];
  cardSymbols: CardSymbol[];
  searchTerms: SearchTerms;
}

export const rootReducer = combineReducers<State>({
  cardsResult: cardsReducer,
  card: cardReducer,
  cardSymbols: cardSymbolsReducer,
  searchTerms: searchTermsReducer,
  sets: setsReducer
});