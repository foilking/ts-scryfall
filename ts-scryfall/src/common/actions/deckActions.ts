import { actionTypes } from '../constants/actionTypes';
import { Card } from '../../model';
// import * as toastr from 'toastr';

export const addCardToDeckAction = (card: Card) => (dispatch: any) => {
    dispatch(addCardToDeck(card));
};

const addCardToDeck = (card: Card) => ({
    type: actionTypes.ADD_CARD_TO_DECK,
    payload: card
});

export const removeCardFromDeckAction = (card: Card) => (dispatch: any) => {
    dispatch(removeCardFromDeck(card));
};

const removeCardFromDeck = (card: Card) => ({
    type: actionTypes.REMOVE_CARD_FROM_DECK,
    payload: card
});