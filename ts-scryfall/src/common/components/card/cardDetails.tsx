import * as React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from '../../../model';
import { CardLegalities } from './cardLegalities';
import { CardSymbols } from './cardSymbols';
import { OracleText } from './oracleText';

export const CardDetails: React.StatelessComponent<CardProps> = ({ card }) => {
    const artistLink = card.artist ? `/search?q=%2B%2Ba%3A%22${card.artist.replace(' ', '+')}%22` : '';
    if ((card.layout === 'transform' || card.layout === 'double_faced_token' || card.layout === 'flip' || card.layout === 'split') && card.card_faces) {
        const cardFront = card.card_faces[0];
        const cardBack = card.card_faces[1];
        return (
            <div className="card-text">
                <h1 className="card-text-title">
                    {cardFront.name}
                    {cardFront.mana_cost &&
                        <span className="card-text-mana-cost">
                            <CardSymbols content={cardFront.mana_cost} cardName={cardFront.name} />
                        </span>
                    }
                </h1>
                <p className="card-text-type-line">
                    {cardFront.type_line}
                </p>
                <div className="card-text-box">
                    {cardFront.oracle_text &&
                        <OracleText oracleText={cardFront.oracle_text} oracleClass="card-text-oracle" />
                    }
                    {cardFront.flavor_text &&
                        <div className="card-text-flavor">
                            <p>
                                {cardFront.flavor_text.split('\n').map((line, lineKey) => {
                                    return (
                                        <text key={lineKey}>
                                            {line}
                                            <br />
                                        </text>
                                    );
                                })}
                            </p>
                        </div>
                    }
                </div>
                {cardFront.type_line && (cardFront.type_line.includes('Creature') || cardFront.type_line.includes('Planeswalker')) &&
                    <div className="card-text-stats">
                        {cardFront.type_line.includes('Creature') &&
                            `${cardFront.power}/${cardFront.toughness}`
                        }
                        {cardFront.type_line.includes('Planeswalker') &&
                            `Loyalty: ${cardFront.loyalty}`
                        }
                    </div>
                }
                <h1 className="card-text-title">
                    {cardBack.name}
                    {cardBack.mana_cost &&
                        <span className="card-text-mana-cost">
                            <CardSymbols content={cardBack.mana_cost} cardName={cardBack.name} />
                        </span>
                    }
                </h1>
                <p className="card-text-type-line">
                    {cardBack.type_line}
                </p>
                <div className="card-text-box">
                    {cardBack.oracle_text &&
                        <OracleText oracleText={cardBack.oracle_text} oracleClass="card-text-oracle" />
                    }
                    {cardBack.flavor_text &&
                        <div className="card-text-flavor">
                            <p>
                                {cardBack.flavor_text.split('\n').map((line, lineKey) => {
                                    return (
                                        <text key={lineKey}>
                                            {line}
                                            <br />
                                        </text>
                                    );
                                })}
                            </p>
                        </div>
                    }dd
                </div>
                {cardBack.type_line && (cardBack.type_line.includes('Creature') || (cardBack.type_line.includes('Planeswalker') && cardBack.loyalty)) &&
                    <div className="card-text-stats">
                        {cardBack.type_line.includes('Creature') &&
                            `${cardBack.power}/${cardBack.toughness}`
                        }
                        {cardBack.type_line.includes('Planeswalker') && cardBack.loyalty &&
                            `Loyalty: ${cardBack.loyalty}`
                        }
                    </div>
                }
                <p className="card-text-artist">
                    Illustrated by <Link to={`${process.env.PUBLIC_URL}/${artistLink}`}>{card.artist}</Link>
                </p>
                <CardLegalities legalities={card.legalities} />
            </div>
        );
    } else {
        return (
            <div className="card-text">
                <h1 className="card-text-title">
                    {card.name}
                    <span className="card-text-mana-cost">
                        <CardSymbols content={card.mana_cost} cardName={card.name} />
                    </span>
                </h1>
                <p className="card-text-type-line">
                    {card.type_line}
                </p>
                <div className="card-text-box">

                    {card.oracle_text &&
                        <OracleText oracleText={card.oracle_text} oracleClass="card-text-oracle" />
                    }
                    {card.flavor_text &&
                        <div className="card-text-flavor">
                            <p>
                                {card.flavor_text.split('\n').map((line, lineKey) => {
                                    return (
                                        <text key={lineKey}>
                                            {line}
                                            <br />
                                        </text>
                                    );
                                })}
                            </p>
                        </div>
                    }
                </div>
                {card.type_line && (card.type_line.includes('Creature') || card.type_line.includes('Planeswalker')) &&
                    <div className="card-text-stats">
                        {card.type_line.includes('Creature') &&
                            `${card.power}/${card.toughness}`
                        }
                        {card.type_line.includes('Planeswalker') &&
                            `Loyalty: ${card.loyalty}`
                        }
                    </div>
                }
                <p className="card-text-artist">
                    Illustrated by <Link to={`${process.env.PUBLIC_URL}/${artistLink}`}>{card.artist}</Link>
                </p>
                <CardLegalities legalities={card.legalities} />
            </div>
        );
    }
};