import { push } from 'react-router-redux';

export const loadSearchPageAction = (searchTerm: string) => (dispatch: any) => {
    dispatch(push(`/cards/${searchTerm}`));
};