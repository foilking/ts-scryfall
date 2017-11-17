import { actionTypes } from '../constants/actionTypes';
import { Set } from '../../model';
import { scryfall } from '../../api/scryfall';

export const fetchSetsAction = () => (dispatch: any) => {
    const sets = window.localStorage.getItem('sets');
    if (sets) {
        console.log('Get sets from local');
        
        const setArray = JSON.parse(sets) as Set[];
        dispatch(fetchSetsCompleted(setArray));
    } else {
        console.log('Get sets from remote');
        scryfall.fetchSetsAsync()
            .then((setsResponse) => {
                dispatch(fetchSetsCompleted(setsResponse));
            });
    }
};

const fetchSetsCompleted = (setsResponse: Set[]) => ({
    type: actionTypes.FETCH_FILTERED_SETS_COMPLETED,
    payload: setsResponse
});