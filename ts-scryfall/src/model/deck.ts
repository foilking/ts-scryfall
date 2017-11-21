import { Card } from './card';

export interface Deck {
    id: number;
    name: string;
    cards: CardInDeck[];
}

export interface CardInDeck {
    card: Card;
    quantity: number;
}