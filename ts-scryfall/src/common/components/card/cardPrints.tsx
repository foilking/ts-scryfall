import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../model';

interface Props {
    card: Card;
}

export const CardPrints: React.StatelessComponent<Props> = ({card}) => {

    return (

        <div className="prints">
        <div className="prints-current">
            <Link to={`/set/${card.set}`} className="prints-current-set">
            {/* This breaks for some child sets because Scryfall uses svg paths and I'm just referrencing image assests (e.g. TSB, some promos) */}
                <img aria-hidden="true" className="prints-current-set-symbol" src={`https://assets.scryfall.com/assets/sets/${card.set}.svg`} />
                <span className="prints-current-set-name">
                    {card.set_name} ({card.set.toUpperCase()})
                </span>
                <span className="prints-current-set-details">
                    #{card.collector_number}, {card.rarity}
                </span>
            </Link>  
        </div>
        <table className="prints-table">
            <thead>
                <tr>
                    <th>
                        <a href="#">Prints</a>
                    </th>
                    <th><span>USD</span></th>
                    <th><span>EUR</span></th>
                    <th><span>TIX</span></th>
                </tr>
            </thead>
            <tbody>
                {/* API doesn't give links to all prints. */}
                <tr className="current">
                    <td>
                        <Link to={`/card/${card.set}/${card.collector_number}`}>
                            <svg className={`rarity-${card.rarity.toLocaleLowerCase()}`} aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4.435c0 .106-.063.221-.188.346l-2.618 2.553.62 3.606.007.144c0 .101-.025.186-.076.256-.05.07-.124.105-.22.105-.091 0-.188-.029-.288-.087l-3.238-1.702-3.238 1.702c-.106.058-.202.087-.288.087-.101 0-.177-.035-.227-.105-.05-.07-.076-.155-.076-.256l.014-.144.62-3.606-2.625-2.553c-.12-.13-.18-.245-.18-.346 0-.178.135-.288.404-.332l3.62-.526 1.623-3.281c.091-.197.209-.296.353-.296s.262.099.353.296l1.623 3.281 3.62.526c.269.043.404.154.404.332z" fill="red" />
                            </svg>
                            {card.set_name}
                        </Link>          
                    </td>
                    <td>
                        <a className="currency-usd" rel="nofollow" href={card.purchase_uris.tcgplayer}>
                        {card.usd && `$${card.usd}`}
                        </a>          
                    </td>
                    <td>
                        <a className="currency-eur" rel="nofollow" href={card.purchase_uris.magiccardmarket}>
                        {card.eur && `€${card.eur}`}
                        </a>          
                    </td>
                    <td>
                        <a className="currency-tix" rel="nofollow" href={card.purchase_uris.cardhoarder}>
                        {card.tix}
                        </a>          
                    </td>
                </tr>   
                <tr>
                    <td><Link to={`/cards?q=%2B%2B!"${card.name}"`}>See all prints</Link></td>
                </tr> 
            </tbody>
        </table>

    </div>
    );
};