import { Card } from './card';

export interface Decks {
    decks: Deck[];
}

export interface DeckFormat {
    name: string;
    isLegal: boolean;
}

export interface Deck {
    id: number;
    name: string;
    cards: CardInDeck[];
    isCurrent: boolean;
    isActive: boolean;
    formats: DeckFormat[];
}

export interface CardInDeck {
    card: Card;
    quantity: number;
}