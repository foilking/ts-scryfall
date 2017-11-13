import * as React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from '../../../model';
import { CardSymbols } from './cardSymbols';

interface CardState {
    isTransformed: boolean;
    isFlipped: boolean;
    isRotated: boolean;
}

export class CardListLayout extends React.Component<CardProps, CardState> {
    public render() {
        const {card} = this.props;
        const cardManaCost = (card.layout === 'transform' && card.card_faces) ? card.card_faces[0].mana_cost : card.mana_cost;
        return (
            <tr>
                <td><Link to={`/card/${card.set}/${card.collector_number}`} tabIndex={-1}>{card.collector_number}</Link></td>
                <td><Link to={`/card/${card.set}/${card.collector_number}`}>{card.name}</Link></td>
                <td>
                    <Link to={`/card/${card.set}/${card.collector_number}`} tabIndex={-1}>
                        {cardManaCost &&
                            <CardSymbols content={cardManaCost} cardName={card.name} />
                        }
                    </Link>          
                </td>
                <td><Link to={`/card/${card.set}/${card.collector_number}`} tabIndex={-1}>{card.type_line}</Link></td>
                <td>
                    <Link to={`/card/${card.set}/${card.collector_number}`} tabIndex={-1}>
                        <abbr title={card.set_name}>{card.set.toUpperCase()}</abbr>
                    </Link>          
                </td>
                <td>
                    <Link to={`/card/${card.set}/${card.collector_number}`} tabIndex={-1}>
                        <abbr title={card.rarity}>{card.rarity}</abbr>
                    </Link>          
                </td>
                <td>
                    <Link to={`/card/${card.set}/${card.collector_number}`} tabIndex={-1}>{card.artist}</Link>
                </td>
                <td className="right">
                    <a tabIndex={-1} className="currency-usd" rel="nofollow" href={card.purchase_uris.tcgplayer}>{card.usd && `$${card.usd}`}</a>
                </td>
                <td className="right">
                    <a tabIndex={-1} className="currency-eur" rel="nofollow" href={card.purchase_uris.magiccardmarket}>{card.eur && `€${card.eur}`}</a>
                </td>
                <td className="right">
                    <a tabIndex={-1} className="currency-tix" rel="nofollow" href={card.purchase_uris.cardhoarder}>{card.tix}</a>
                </td>
            </tr>
        );
    }
}