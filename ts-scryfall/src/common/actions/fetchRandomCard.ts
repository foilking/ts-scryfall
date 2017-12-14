import { actionTypes } from '../constants/actionTypes';
import { Card } from '../../model';
import { scryfall } from '../../api/scryfall';

export const fetchRandomCardAsyncAction = () => (dispatch: any) => {
    scryfall.fetchRandomCard()
        .then((card) => {
            dispatch(fetchRandomCardCompleted(card));
        });
};

const fetchRandomCardCompleted = (card: Card) => ({
    type: actionTypes.FETCH_CARD_COMPLETED,
    payload: card
});