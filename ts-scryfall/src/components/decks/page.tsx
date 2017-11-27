import * as React from 'react';
import { Decks } from '../../model';
import { Link } from 'react-router-dom';
import { CardSymbols } from '../../common/components/card';

interface DecksProps {
    decks: Decks;
}

export class DecksPage extends React.Component<DecksProps, {}> {
    constructor(props: DecksProps) {
        super(props);
        document.title = 'Decks | TS Scryfall';
    }

    public render() {
        const { decks } = this.props.decks;
        const deck = decks.find((d) => d.isCurrent);
        return (
            <div className="decks">
                {deck && 
                    <div className="deck">
                        <input type="text" className="name" defaultValue={deck.name} />
                        {/* Foreach card in a deck, find all legalities. Then reduce to legalities that all cards share. */}
                        
                        <div className="checklist-wrapper">
                            <table className="checklist">
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Cost</td>
                                        <td>Type</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {deck.cards && deck.cards.map((cardPair, key) => {
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

                                            </tr>
                                        );
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        );
    }
}