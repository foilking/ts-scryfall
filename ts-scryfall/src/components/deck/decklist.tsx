import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardInDeck } from '../../model';
import { CardSymbols } from '../../common/components/card';

interface DecklistDisplayProps {
    cards: CardInDeck[];
    addCardToDeck: (card: Card) => void;
    removeCardFromDeck: (card: Card) => void;
}

export class DecklistDisplay extends React.Component<DecklistDisplayProps, {}> {
    constructor(props: DecklistDisplayProps) {
        super(props);
    }

    public render() {
        const {removeCardFromDeck, addCardToDeck, cards} = this.props;
        return (
            <tbody>
                {cards && cards.map((cardPair, key) => {
                    const { card, quantity } = cardPair;
                    const cardManaCost = (card.layout === 'transform' && card.card_faces) ? card.card_faces[0].mana_cost : card.mana_cost;
                    return (
                        <tr key={key}>
                            <td><Link to={`/card/${card.set}/${card.collector_number}`}>{card.name}</Link></td>
                            <td><Link to={`/card/${card.set}/${card.collector_number}`}>{quantity}</Link></td>
                            <td><Link to={`/card/${card.set}/${card.collector_number}`}>
                                {cardManaCost &&
                                    <CardSymbols content={cardManaCost} cardName={card.name} />
                                }
                            </Link></td>
                            <td>
                                <button onClick={event => addCardToDeck(card)}>Add Card</button>
                                <button onClick={event => removeCardFromDeck(card)}>Remove Card</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        );
    }
}
