import { actionTypes } from '../constants/actionTypes';
import { Card } from '../../model';
// import * as toastr from 'toastr';

export const addCardToDeckAction = (card: Card) => (dispatch: any) => {
    dispatch(addCardToDeckComplete(card));
    // toastr.success('Added Card to Deck');
};

const addCardToDeckComplete = (card: Card) => ({
    type: actionTypes.ADD_CARD_TO_DECK,
    payload: card
});