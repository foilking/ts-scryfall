import { actionTypes } from '../common/constants/actionTypes';
import { Decks, Deck, Card, CardInDeck, DeckFormat } from '../model/index';

export const initialState: Decks = {
    decks: [
        {
            id: 1,
            isActive: true,
            isCurrent: true,
            name: 'My Deck',
            cards: [] as CardInDeck[],
            formats: [ ] as DeckFormat[]
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
        let cardInDeck = deck.cards.find((c) => c.card === card);
        if (cardInDeck) {
            cardInDeck.quantity++;
        } else {
            cardInDeck = {card: card, quantity: 1};
            deck.cards.push(cardInDeck);
        }
        validateDeckLegal(deck, cardInDeck);
    }
    return decks;
};

const validateDeckLegal = (deck: Deck, cardInDeck: CardInDeck) => {
    // Some cards break the rules on how many you can have in a deck.
    // Here we're filtering those cards out.
    const excludeCardsThatAllowGreaterMultiples = deck.cards.filter((c) => !(
        c.card.type_line.indexOf('Basic') > -1 
        || c.card.oracle_text.indexOf('A deck can have any number of cards named') > -1));
    
    // Constructed decks can have only 4 of any one card that don't break the quantity rule.
    const isValidConstructedDeck = excludeCardsThatAllowGreaterMultiples
        .every((c) => c.quantity <= 4);
    
    // Highlander decks can have only 1 of any one card that don't break the quantity rule.
    const isValidHighlanderDeck = excludeCardsThatAllowGreaterMultiples
        .every((c) => c.quantity === 1);
    
    // Update the deck's legality
    Object.keys(cardInDeck.card.legalities).map((legality, key) => {    
        // Figure out if the deck is legal 
        let isLegal = (cardInDeck.card.legalities[legality] === 'legal' 
            || (cardInDeck.card.legalities[legality] === 'restricted' && cardInDeck.quantity <= 1));
        
        // If the format is a highlander format, make sure the full deck is also highlander legal
        if (legality === 'duel' || legality === 'commander' || legality === '1v1') {
            isLegal = isLegal && isValidHighlanderDeck;
        } else {
            isLegal = isLegal && isValidConstructedDeck;
        }
                            
        const format = deck.formats.find((f) => f.name === legality);
        if (format) {                  
            format.isLegal = format.isLegal && isLegal;
        } else {
            deck.formats.push({ name: legality, isLegal: isLegal});
        }
    });
};