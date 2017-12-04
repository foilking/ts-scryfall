import * as React from 'react';
import { Pie } from 'react-chartjs-2';
import { Deck, Card } from '../../model';
import { DecklistDisplay } from './decklist';

interface DeckProps {
    deck: Deck;
    addCardToDeck: (card: Card) => void;
    removeCardFromDeck: (card: Card) => void;
}

interface DeckState {
    data: any;
}

class PieChartSection {
    label: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
    data: number;
}

class PieChartData {
    sections: PieChartSection[];
    constructor() {
        this.sections = [] as PieChartSection[];
    }
    getData() {
        return {
            labels: this.sections.map(s => s.label),
            datasets: [{
                data: this.sections.map(s => s.data),
                backgroundColor: this.sections.map(s => s.backgroundColor),
                hoverBackgroundColor: this.sections.map(s => s.hoverBackgroundColor)
            }]
        };
    }
}

enum CardType {
    CREATURE = 'Creature',
    LAND = 'Land', 
    SPELL = 'Spell'
}

export class DeckPage extends React.Component<DeckProps, DeckState> {
    constructor(props: DeckProps) {
        super(props);
        document.title = `Deck ${props.deck.id} | TS Scryfall`;
    }

    public render() {
        const { deck, removeCardFromDeck, addCardToDeck } = this.props;
        const cardTypeData = this.generateCardTypeChartData(this.props.deck).getData();
        return (
            <div className="deck">
                <div className="checklist-wrapper">
                    <div id="chart">
                        <Pie data={cardTypeData} />
                    </div>
                </div>
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

    private generateCardTypeChartData(deck: Deck): PieChartData {
        let pieChart = new PieChartData();
        deck.cards.map(cardInDeck => {
            const typeLine = cardInDeck.card.type_line;
            const cardType = typeLine.includes('Creature') ? CardType.CREATURE : typeLine.includes('Land') ? CardType.LAND :  CardType.SPELL;
            const typeSection = pieChart.sections.find(s => s.label === cardType);
            if (typeSection) {
                typeSection.data += cardInDeck.quantity;
            } else {
                pieChart.sections.push({
                    data: cardInDeck.quantity,
                    label: cardType,
                    backgroundColor: this.cardTypeColors(cardType),
                    hoverBackgroundColor: this.cardTypeColors(cardType)
                });
            }
        });
        return pieChart;
    }

    private cardTypeColors(cardType: CardType): string {
        if (cardType === CardType.CREATURE) {
            return '#FF6384';
        } else if (cardType === CardType.LAND) {
            return '#36A2EB';
        } else if (cardType === CardType.SPELL) {
            return '#FFCE56';
        }
        return '';
    }
}