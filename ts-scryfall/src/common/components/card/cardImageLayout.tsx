import * as React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from '../../../model';

interface CardState {
    isTransformed: boolean;
    isFlipped: boolean;
    isRotated: boolean;
}

export class CardImageLayout extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);
        this.transformClick = this.transformClick.bind(this);
        // this.flipClick = this.flipClick.bind(this);
        // this.rotateClick = this.rotateClick.bind(this);
        this.state = {
            isTransformed: false,
            isFlipped: false,
            isRotated: false
        };
    }
    
    public componentDidMount() {
        this.setState({
            isTransformed: false,
            isFlipped: false,
            isRotated: false
        });
    }

    public render() {
        const { card } = this.props;
        const cardImageClass = `card ${card.set} border-black`;
        const cardName = `${card.name} (${card.set.toUpperCase()})`;
        if ((card.layout === 'transform' || card.layout === 'double_faced_token') && card.card_faces) {
            const doubleClass = `card-grid-item-double-sided ${this.state.isTransformed ? 'flip-backside' : ''}`;
            return (
                <Link to={`/card/${card.set}/${card.collector_number}`} className="card-grid-item">
                    <div className={doubleClass}>
                        <div className="card-grid-item-front">
                            <img className={cardImageClass} alt={cardName} title={cardName} data-rotate="flip-backside" src={card.card_faces[0].image_uris.normal} />
                        </div>
                        <div className="card-grid-item-back">
                            <img className={cardImageClass} alt={cardName} title={cardName} data-rotate="flip-backside" src={card.card_faces[1].image_uris.normal} />
                        </div>
                    </div>
                    <button type="button" className="card-grid-item-transform-button" title="Transform card" onClick={event => { event.preventDefault(); this.transformClick(); }}>
                        <svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M884.3,357.6c116.8,117.7,151.7,277-362.2,320V496.4L243.2,763.8L522,1031.3V860.8C828.8,839.4,1244.9,604.5,884.3,357.6z" /><path d="M557.8,288.2v138.4l230.8-213.4L557.8,0v142.8c-309.2,15.6-792.1,253.6-426.5,503.8C13.6,527.9,30,330.1,557.8,288.2z" /></svg>
                    </button>
                </Link>
            );
        } else {
            return (
                <Link to={`/card/${card.set}/${card.collector_number}`} className="card-grid-item">
                    <img className={cardImageClass} alt={cardName} title={cardName} src={card.image_uris.normal} />
                </Link>
            );
        }
    }
    
    private transformClick () {
        const isTransformed = !this.state.isTransformed;
        this.setState({isTransformed: isTransformed});
    }
}