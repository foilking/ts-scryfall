import { actionTypes } from '../common/constants/actionTypes';
import { Deck, Card, CardInDeck } from '../model/index';

export const deckReducer = (state: Deck = {} as Deck, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_CARD_TO_DECK:
            return handleAddCardToDeck(state, action.payload as Card);
        default: 
            return state;
    }
};

const handleAddCardToDeck = (deck: Deck, card: Card) => {
    if (!deck.cards) {
        deck.cards = [] as CardInDeck[];
    }
    const cardInDeck = deck.cards.find((c) => c.card === card);
    if (cardInDeck) {
        cardInDeck.quantity++;
    } else {
        deck.cards.push({card: card, quantity: 1});
    }
    return deck;
};