import { actionTypes } from '../constants/actionTypes';
import { Card } from '../../model';
// import * as toastr from 'toastr';

export const addCardToDeckAction = (card: Card) => (dispatch: any) => {
    dispatch(addCardToDeck(card));
    // toastr.success('Added Card to Deck');
};

const addCardToDeck = (card: Card) => ({
    type: actionTypes.ADD_CARD_TO_DECK,
    payload: card
});

// export const removeCardFromDeckAction = (card: Card) => (dispatch: any) => {
//     dispatch(removeCardFromDeck)
// }