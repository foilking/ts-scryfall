import { actionTypes } from '../common/constants/actionTypes';
import { Deck, Card, CardInDeck, DeckFormat } from '../model/index';

export const initialState: Deck = {
    id: 1,
    isActive: true,
    isCurrent: true,
    name: 'My Deck',
    cards: [] as CardInDeck[],
    formats: [ ] as DeckFormat[]
} as Deck;

export const deckReducer = (state: Deck = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_CARD_TO_DECK:
            return handleAddCardToDeck(state, action.payload as Card);
        case actionTypes.REMOVE_CARD_FROM_DECK:
            return handleRemoveCardFromDeck(state, action.payload as Card);
        default:
            return state;
    }
};

const handleAddCardToDeck = (deck: Deck, card: Card) => {    
    if (!deck.cards) {
        deck.cards = [] as CardInDeck[];
    }
    let cardInDeck = deck.cards.find((c) => c.card === card);
    if (cardInDeck) {
        deck = {...deck, cards: deck.cards.map((c, key) => 
            c.card === card ? {...c, quantity: c.quantity + 1} : c
        )};
    } else {
        cardInDeck = {card: card, quantity: 1};
        deck.cards = [...deck.cards, cardInDeck];
    }
    validateDeckLegal(deck, cardInDeck);
    return deck;
};

const handleRemoveCardFromDeck = (deck: Deck, card: Card) => {   
    if (deck.cards) {
        let cardInDeck = deck.cards.find((c) => c.card === card);
        if (cardInDeck) {
            if (cardInDeck.quantity === 1) {
                deck = {...deck, cards: deck.cards.filter((c) => c.card !== card)};
            } else {
                deck = {...deck, cards: deck.cards.map((c, key) => 
                    c.card === card ? {...c, quantity: c.quantity - 1} : c
                )};
            }
            validateDeckLegal(deck, cardInDeck);
        }
    }
    return deck;
};

const validateDeckLegal = (deck: Deck, cardInDeck: CardInDeck) => {
    // Some cards break the rules on how many you can have in a deck.
    // Here we're filtering those cards out.
    const excludeCardsThatAllowGreaterMultiples = deck.cards.filter((c) => {
        let typeLine = '';
        let oracleText = '';
        const card = c.card;
        if ((card.layout === 'transform' || card.layout === 'double_faced_token' || card.layout === 'flip' || card.layout === 'split') && card.card_faces) {
            const cardFront = card.card_faces[0];
            typeLine = cardFront.type_line;
            oracleText = cardFront.oracle_text;
        } else {
            typeLine = card.type_line;
            oracleText = card.oracle_text;
        }
        return !(typeLine.indexOf('Basic') > -1 || oracleText.indexOf('A deck can have any number of cards named') > -1);
    });
    
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