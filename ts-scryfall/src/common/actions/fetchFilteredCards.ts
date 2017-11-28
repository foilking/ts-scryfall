import { actionTypes } from '../constants/actionTypes';
import { SearchTerms, CardsResponse } from '../../model';
import { scryfall } from '../../api/scryfall';

export const fetchFilteredCardsAction = (params: SearchTerms, getAll: boolean = false) => (dispatch: any) => {
    scryfall.fetchFilteredCardsAsync(params, getAll)
        .then((cardsResponse) => {
            dispatch(fetchFilteredCardsCompleted(cardsResponse));
        });
};

const fetchFilteredCardsCompleted = (cardsResponse: CardsResponse) => ({
    type: actionTypes.FETCH_FILTERED_CARDS_COMPLETED,
    payload: cardsResponse,
});