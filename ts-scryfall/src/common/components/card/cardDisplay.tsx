import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../model';
import { CardFormat } from '../../constants/cardFormats';
import { CardFullLayout } from './cardFullLayout';
import { CardImageLayout } from './cardImageLayout';
import { CardListLayout } from './cardListLayout';

interface CardDisplayProps {
    cards: Card[];
    cardFormat: CardFormat;
}

export class CardDisplay extends React.Component<CardDisplayProps, {}> {
    constructor(props: CardDisplayProps) {
        super(props);
    }

    public render() {
        const {cards, cardFormat} = this.props;
        
        switch (cardFormat) {
            case CardFormat.Full:
                return (
                    <div className="card-full">
                        {cards && cards.map((card, key) => {
                            return (
                                <CardFullLayout card={card} key={key} />
                            );
                        })}
                    </div>
                );
            case CardFormat.Image:
                return (
                    <div className="card-grid">
                        <div className="card-grid-inner">
                            {cards && cards.map((card, key) => {
                                return (
                                    <CardImageLayout card={card} key={key} />
                                );
                            })}
                        </div>
                  </div>
                );
            case CardFormat.List:
                return( 
                    <div className="checklist-wrapper">
                        <table className="checklist" id="js-checklist">
                        <thead>
                            <tr>
                                <th>
                                    <Link to={`${process.env.PUBLIC_URL}/search?as=checklist&amp;order=set&amp;q=`}>№</Link>
                                </th>
                                <th>
                                    <Link to={`${process.env.PUBLIC_URL}/search?as=checklist&amp;q=`}>Name <span className="arrow">▲</span></Link>
                                </th>
                                <th>M.Cost</th>
                                <th>Type</th>
                                <th>
                                    <a href="/search?as=checklist&amp;order=set&amp;q=">Set</a></th>
                                <th>
                                    <a href="/search?as=checklist&amp;order=rarity&amp;q=">
                                        <abbr title="Rarity">R</abbr>
                                    </a>        
                                </th>
                                <th>Artist</th>
                                <th className="right">
                                    <a href="/search?as=checklist&amp;order=usd&amp;q=">
                                        <abbr title="Price in U.S. Dollars">USD</abbr>
                                    </a>        
                                </th>
                                <th className="right">
                                    <a href="/search?as=checklist&amp;order=eur&amp;q=">
                                        <abbr title="Average price in Euros">EUR</abbr>
                                    </a>        
                                </th>
                                <th className="right">
                                    <a href="/search?as=checklist&amp;order=tix&amp;q=">
                                        <abbr title="Average price in Event Tickets">TIX</abbr>
                                    </a>        
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards && cards.map((card, key) => {
                                return (
                                    <CardListLayout card={card} key={key} />
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                );
            default:
                return <div />;
        }
    }
}