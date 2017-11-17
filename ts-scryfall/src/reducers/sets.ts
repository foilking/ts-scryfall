import { actionTypes } from '../common/constants/actionTypes';
import { Set } from '../model';

export const setsReducer = (state: Set[] = [], action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_FILTERED_SETS_COMPLETED:
            return handleFetchSetsCompleted(state, action.payload);
        default:
            return state;
    }
};

const handleFetchSetsCompleted = (state: Set[], payload: Set[]) => {
    window.localStorage.setItem('sets', JSON.stringify(payload));
    return payload;
};