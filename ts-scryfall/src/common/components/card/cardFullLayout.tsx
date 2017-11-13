import * as React from 'react';
import { CardProps } from '../../../model';
import { CardImage } from './cardImage';
import { CardDetails } from './cardDetails';
import { CardPrints } from './cardPrints';

interface CardState {
    isTransformed: boolean;
    isFlipped: boolean;
    isRotated: boolean;
}

export class CardFullLayout extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);
        this.transformClick = this.transformClick.bind(this);
        this.flipClick = this.flipClick.bind(this);
        this.rotateClick = this.rotateClick.bind(this);
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
        const {card} = this.props;
        return (
            <div className="card-profile">
                <div className="inner-flex">
                    <CardImage card={card} isTransformed={this.state.isTransformed} isFlipped={this.state.isFlipped} isRotated={this.state.isRotated} />
                    <div className="card-actions">
                        {(card.layout === 'transform' || card.layout === 'double_faced_token') &&
                            <button name="button" type="submit" className="button-primary button-icon-left" title="Transform Card" data-component="card-backface-button" onClick={event => this.transformClick()}>
                                <span className="button-inner">
                                    <svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M884.3,357.6c116.8,117.7,151.7,277-362.2,320V496.4L243.2,763.8L522,1031.3V860.8C828.8,839.4,1244.9,604.5,884.3,357.6z" /><path d="M557.8,288.2v138.4l230.8-213.4L557.8,0v142.8c-309.2,15.6-792.1,253.6-426.5,503.8C13.6,527.9,30,330.1,557.8,288.2z" /></svg>
                                    Transform
                                </span>
                            </button>
                        }
                        {card.layout === 'flip' &&
                            <button name="button" type="submit" className="button-primary button-icon-left" title="Flip Card" onClick={event => this.flipClick()}>
                                <span className="button-inner">
                                    <svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M158.6,724.5L83.8,779c29.8,40.9,66.2,76.2,108.1,104.8l52.2-76.4C210.9,784.7,182.2,756.8,158.6,724.5z" /><path d="M94.1,558.9c-0.7-6.5-1.3-13.1-1.7-19.6L0,544.8c0.5,8.2,1.2,16.5,2.2,24.7c4.8,42.1,15.6,83.2,32,121.9l85.2-36.1 C106.4,624.7,97.9,592.3,94.1,558.9z" /><path d="M136.7,347.7l-80.6-45.5c-25,44.3-42,92-50.5,141.9l91.2,15.6C103.5,420.4,116.9,382.7,136.7,347.7z" /><path d="M280.9,930.8c47.3,18.4,97,28.4,147.7,29.8l2.5-92.5c-40-1.1-79.3-9-116.6-23.5L280.9,930.8z" /><path d="M510.5,861.1l18.3,90.7c49.8-10.1,97-28.5,140.4-54.7L621.4,818C587.2,838.7,549.9,853.2,510.5,861.1z" /><path d="M233.7,128.9c-44.5,23.7-84.4,54.6-118.5,91.9l68.3,62.5c27.1-29.6,58.8-54.2,94.1-72.9C476.9,108.5,736,267.1,733.6,544.3 l-116-0.2c-7.8,0-14.9,4.7-18,11.9c-3,7.3-1.4,15.6,4.2,21.2L797,771c7.6,7.6,19.9,7.6,27.5,0l193.8-193.2 c5.6-5.5,7.2-13.9,4.2-21.1c-3-7.3-10.1-12-17.9-12l-114.2-0.2c2-124.3-44.9-240.9-132.2-328.5c-18.4-18.5-38.7-35.6-60.1-50.7 C562.1,69.3,382.1,56.7,233.7,128.9z" /></svg>
                                    Flip
                                </span>
                            </button>
                        }
                        {card.layout === 'split' &&
                            <button name="button" type="submit" className="button-primary button-icon-left" title="Flip Card" onClick={event => this.rotateClick()}>
                                <span className="button-inner">
                                    <svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M158.6,724.5L83.8,779c29.8,40.9,66.2,76.2,108.1,104.8l52.2-76.4C210.9,784.7,182.2,756.8,158.6,724.5z" /><path d="M94.1,558.9c-0.7-6.5-1.3-13.1-1.7-19.6L0,544.8c0.5,8.2,1.2,16.5,2.2,24.7c4.8,42.1,15.6,83.2,32,121.9l85.2-36.1 C106.4,624.7,97.9,592.3,94.1,558.9z" /><path d="M136.7,347.7l-80.6-45.5c-25,44.3-42,92-50.5,141.9l91.2,15.6C103.5,420.4,116.9,382.7,136.7,347.7z" /><path d="M280.9,930.8c47.3,18.4,97,28.4,147.7,29.8l2.5-92.5c-40-1.1-79.3-9-116.6-23.5L280.9,930.8z" /><path d="M510.5,861.1l18.3,90.7c49.8-10.1,97-28.5,140.4-54.7L621.4,818C587.2,838.7,549.9,853.2,510.5,861.1z" /><path d="M233.7,128.9c-44.5,23.7-84.4,54.6-118.5,91.9l68.3,62.5c27.1-29.6,58.8-54.2,94.1-72.9C476.9,108.5,736,267.1,733.6,544.3 l-116-0.2c-7.8,0-14.9,4.7-18,11.9c-3,7.3-1.4,15.6,4.2,21.2L797,771c7.6,7.6,19.9,7.6,27.5,0l193.8-193.2 c5.6-5.5,7.2-13.9,4.2-21.1c-3-7.3-10.1-12-17.9-12l-114.2-0.2c2-124.3-44.9-240.9-132.2-328.5c-18.4-18.5-38.7-35.6-60.1-50.7 C562.1,69.3,382.1,56.7,233.7,128.9z" /></svg>
                                    Rotate
                                </span>
                            </button>
                        }
                    </div>
                    <CardDetails card={card} />
                    <CardPrints card={card} />
                </div>
            </div>
        );
    }
    
    private transformClick () {
        const isTransformed = !this.state.isTransformed;
        this.setState({isTransformed: isTransformed});
    }

    private flipClick () {
        const isFlipped = !this.state.isFlipped;
        this.setState({isFlipped: isFlipped});
    }
    
    private rotateClick () {
        const isRotated = !this.state.isRotated;
        this.setState({isRotated: isRotated});
    }
}