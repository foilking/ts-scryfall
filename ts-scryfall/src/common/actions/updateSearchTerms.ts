import { actionTypes } from '../constants/actionTypes';
import { SearchTerms } from '../../model';

export const updateSearchTermsAction = (params: SearchTerms) => (dispatch: any) => {
    dispatch(updateSearchTermsCompleted(params));
};

const updateSearchTermsCompleted = (searchTerms: SearchTerms) => ({
    type: actionTypes.UPDATE_CARD_SEARCH_TERMS,
    payload: searchTerms
});