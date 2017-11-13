import { actionTypes } from '../constants/actionTypes';
import { Set } from '../../model';
import { scryfall } from '../../api/scryfall';

export const fetchSetsAction = () => (dispatch: any) => {
    scryfall.fetchSetsAsync()
        .then((setsResponse) => {
            dispatch(fetchSetsCompleted(setsResponse));
        });
};

const fetchSetsCompleted = (setsResponse: Set[]) => ({
    type: actionTypes.FETCH_FILTERED_SETS_COMPLETED,
    payload: setsResponse
});