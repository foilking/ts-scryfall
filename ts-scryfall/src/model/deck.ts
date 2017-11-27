import { Card } from './card';

export interface Decks {
    decks: Deck[];
}

export interface Deck {
    id: number;
    name: string;
    cards: CardInDeck[];
    isCurrent: boolean;
    isActive: boolean;
}

export interface CardInDeck {
    card: Card;
    quantity: number;
}