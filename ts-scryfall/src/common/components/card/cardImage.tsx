import * as React from 'react';
import { Card } from '../../../model';

export interface CardImageProps {
    card: Card;
    isTransformed: boolean;
    isFlipped: boolean;
    isRotated: boolean;
}

interface CardImageState {
}

export class CardImage extends React.Component<CardImageProps, CardImageState>  {
    constructor(props: CardImageProps) {
        super(props);
    }

    public render() {
        const { card } = this.props;
        const className = `card ${card.set} border-${card.border_color}`;
        if ((card.layout === 'transform' || card.layout === 'double_faced_token') && card.card_faces) {
            const imageClass = `card-image ${this.props.isTransformed ? 'flip-backside' : '' }`;
            return (
                <div className={imageClass}>
                    <div className="card-image-front">
                        <img src={card.card_faces[0].image_uris.large} title={card.name} className={className} />
                    </div>
                    <div className="card-image-back">
                        <img src={card.card_faces[1].image_uris.large} title={card.name} className={className} />
                    </div>
                </div>
            );
            
        } else {
            let decoratorClass = '';
            if (this.props.isFlipped) {
                decoratorClass = 'rotate-180';
            } else if (this.props.isRotated && card.card_faces) {
                const cardBack = card.card_faces[1];
                if (cardBack.oracle_text.indexOf('Aftermath') > -1) {
                    decoratorClass = 'rotate-90ccw';
                } else {
                    decoratorClass = 'rotate-90cw';
                }
            }
            const imageClass = `card-image ${decoratorClass}`;
            return (
                <div className={imageClass}>
                    <div className="card-image-front">
                        <img src={card.image_uris.large} title={card.name} className={className} />
                    </div>
                </div>
            );
        }
    }
}