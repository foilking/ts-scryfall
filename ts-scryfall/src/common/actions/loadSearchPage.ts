import { replace } from 'react-router-redux';

export const loadSearchPageAction = (searchTerm: string) => (dispatch: any) => {
    dispatch(replace(`/cards/${searchTerm}`));
};