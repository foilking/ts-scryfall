import { actionTypes } from '../common/constants/actionTypes';
import { Card } from '../model';

export const cardReducer = (state: Card = {} as Card, action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_CARD_COMPLETED:
            return handleFetchCardCompleted(state, action.payload);
        default:
            return state;
    }
};

const handleFetchCardCompleted = (state: Card, payload: Card) => {
    return payload;
};