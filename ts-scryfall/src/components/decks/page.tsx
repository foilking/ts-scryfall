import * as React from 'react';
import { Decks } from '../../model';
import { Link } from 'react-router-dom';
import { CardSymbols } from '../../common/components/card';

interface DecksProps {
    decks: Decks;
}

class DeckLegal {
    Standard: boolean;
    Frontier: boolean;
    Modern: boolean;
    Pauper: boolean;
    Legacy: boolean;
    Penny: boolean;
    Vintage: boolean;
    Duel: boolean;
    Commander: boolean;
    '1v1': boolean;
    Future: boolean;
}

export class DecksPage extends React.Component<DecksProps, {}> {
    constructor(props: DecksProps) {
        super(props);
        document.title = 'Decks | TS Scryfall';
    }

    public render() {
        const deckLegal = new DeckLegal();
        const { decks } = this.props.decks;
        const deck = decks.find((d) => d.isCurrent);
        {/* Foreach card in a deck, find all legalities. Then reduce to legalities that all cards share. */}
        if (deck && deck.cards) {
            const cardLegalities = deck.cards.map((cardInDeck) => cardInDeck.card.legalities);
            deckLegal.Standard = cardLegalities.every((legalities) => {                
                return legalities.standard === 'legal';
            });
            deckLegal.Frontier = cardLegalities.every((legalities) => {                
                return legalities.frontier === 'legal';
            });
            deckLegal.Modern = cardLegalities.every((legalities) => {                
                return legalities.modern === 'legal';
            });
            deckLegal.Pauper = cardLegalities.every((legalities) => {                
                return legalities.pauper === 'legal';
            });
            deckLegal.Legacy = cardLegalities.every((legalities) => {                
                return legalities.legacy === 'legal';
            });
            deckLegal.Penny = cardLegalities.every((legalities) => {                
                return legalities.penny === 'legal';
            });
        }
        return (
            <div className="decks">
                {deck && 
                    <div className="deck">
                        <div className="checklist-wrapper">
                            <input type="text" className="name" defaultValue={deck.name} />
                            {Object.keys(deckLegal).map((legality, key) => {
                                return (
                                    <div className="legality" key={key}>
                                        {deckLegal[legality] ? `Legal in ${legality}` : `Not legal in ${legality}`}
                                    </div>
                                );
                            })}
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