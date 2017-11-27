import { actionTypes } from '../common/constants/actionTypes';
import { Decks, Deck, Card, CardInDeck } from '../model/index';

export const initialState: Decks = {
    decks: [
        {
            id: 1,
            isActive: true,
            isCurrent: true,
            name: 'My Deck',
            cards: [] as CardInDeck[]
        } as Deck
    ] as Deck[]
};

export const decksReducer = (state: Decks = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_CARD_TO_DECK:
            return handleAddCardToDeck(state, action.payload as Card);
        default: 
            return state;
    }
};

const handleAddCardToDeck = (decks: Decks, card: Card) => {    
    let deck = decks.decks.find((d) => d.isCurrent);
    if (deck) {
        if (!deck.cards) {
            deck.cards = [] as CardInDeck[];
        }
        const cardInDeck = deck.cards.find((c) => c.card === card);
        if (cardInDeck) {
            cardInDeck.quantity++;
        } else {
            deck.cards.push({card: card, quantity: 1});
        }
    }
    return decks;
};