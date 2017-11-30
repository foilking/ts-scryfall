import * as React from 'react';
import { Deck, Card } from '../../model';
import { DecklistDisplay } from './decklist';

interface DeckProps {
    deck: Deck;
    addCardToDeck: (card: Card) => void;
    removeCardFromDeck: (card: Card) => void;
}

export class DeckPage extends React.Component<DeckProps, {}> {
    constructor(props: DeckProps) {
        super(props);
        document.title = `Deck ${props.deck.id} | TS Scryfall`;
    }

    public render() {
        const { deck, removeCardFromDeck, addCardToDeck } = this.props;
        console.log('Render Decks Page');
        
        return (
            <div className="deck">
                <div className="checklist-wrapper">
                    <input type="text" className="name" defaultValue={deck.name} />
                    {deck.formats.filter((format) => format.isLegal).map((format, key) => {
                        return (
                            <span className="format" key={key}>Legal in {format.name}</span>
                        );
                    })}
                    <table className="checklist">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Quantity</td>
                                <td>Cost</td>
                                <td>&nbsp;</td>
                            </tr>
                        </thead>
                        <DecklistDisplay cards={deck.cards} addCardToDeck={addCardToDeck} removeCardFromDeck={removeCardFromDeck} />
                    </table>
                </div>
            </div>
        );
    }
}