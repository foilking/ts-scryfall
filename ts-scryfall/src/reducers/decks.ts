// import { actionTypes } from '../common/constants/actionTypes';
import { Decks, Deck } from '../model/index';

export const initialState: Decks = {
    decks: [ ] as Deck[]
};

export const decksReducer = (state: Decks = initialState, action: any) => {
    switch (action.type) {
        default: 
            return state;
    }
};