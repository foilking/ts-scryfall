import { combineReducers } from 'redux';
import { Card, SearchTerms, Set, CardSymbol, CardsResponse, Decks, Deck } from '../model';
import { cardsReducer } from './cards';
import { cardReducer } from './card';
import { cardSymbolsReducer } from './cardSymbols';
import { searchTermsReducer } from './searchTerms';
import { setsReducer } from './sets';
import { decksReducer } from './decks';
import { deckReducer } from './deck';

export interface State {
  cardsResult: CardsResponse;
  card: Card;
  sets: Set[];
  cardSymbols: CardSymbol[];
  searchTerms: SearchTerms;
  decks: Decks;
  deck: Deck;
}

export const rootReducer = combineReducers<State>({
  cardsResult: cardsReducer,
  card: cardReducer,
  cardSymbols: cardSymbolsReducer,
  searchTerms: searchTermsReducer,
  sets: setsReducer,
  decks: decksReducer,
  deck: deckReducer
});