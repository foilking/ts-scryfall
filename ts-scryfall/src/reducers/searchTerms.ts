import { actionTypes } from '../common/constants/actionTypes';
import { SearchTerms } from '../model';

export const searchTermsReducer = (state: SearchTerms = {} as SearchTerms, action: any) => {
    switch (action.type) {
        case actionTypes.UPDATE_CARD_SEARCH_TERMS:
            return handleUpdateSearchTerms(state, action.payload);
        default:
            return state;
    }
};

const handleUpdateSearchTerms = (state: SearchTerms, payload: SearchTerms) => {     
    return payload;
};