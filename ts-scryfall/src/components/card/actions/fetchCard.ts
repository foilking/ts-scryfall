import { actionTypes } from '../../../common/constants/actionTypes';
import { Card } from '../../../model';
import { scryfall } from '../../../api/scryfall';

export const fetchCardByCodeAndCollectorNumberAsyncAction = (setCode: string, collectorNumber: string) => (dispatch: any) => {
    scryfall.fetchCardByCodeAndCollectorNumberAsync(setCode, collectorNumber)
        .then((card) => {
            dispatch(fetchCardByCodeAndCollectorNumberCompleted(card));
        });
};

const fetchCardByCodeAndCollectorNumberCompleted = (card: Card) => ({
    type: actionTypes.FETCH_CARD_COMPLETED,
    payload: card
});