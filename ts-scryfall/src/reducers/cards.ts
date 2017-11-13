import { actionTypes } from '../common/constants/actionTypes';
import { CardsResponse } from '../model';

export const cardsReducer = (state: CardsResponse = {} as CardsResponse, action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_FILTERED_CARDS_COMPLETED:
            return handleFetchFilteredCardsCompleted(state, action.payload);
        default: 
            return state;
    }
};

const handleFetchFilteredCardsCompleted = (state: CardsResponse, payload: CardsResponse) => {
    return payload;
};