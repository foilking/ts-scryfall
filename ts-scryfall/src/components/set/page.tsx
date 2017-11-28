import * as React from 'react';
import { CardsResponse, SearchTerms, Card, SearchOrder, SearchOrderFormat, Set } from '../../model';
import { CardDisplay } from '../../common/components/card';
import { CardFormat } from '../../common/constants/cardFormats';

interface Props {
    currentSetCode: string;
    sets: Set[];
    cardsResult: CardsResponse;
    searchTerms: SearchTerms;
    fetchSets: () => void;
    fetchFilteredCards: (searchTerms: SearchTerms, getAll: boolean) => void;
    addCardToDeck: (card: Card) => void;
}

interface State {
    cardFormat: CardFormat;
}

export class SetPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            cardFormat: CardFormat.Image
        };

        this.changeListDisplay = this.changeListDisplay.bind(this);
        this.orderChange = this.orderChange.bind(this);
        this.props.fetchSets();
        this.props.fetchFilteredCards(this.props.searchTerms, true);
    }

    public render() {
        const { cardFormat } = this.state;
        const { cardsResult, addCardToDeck, searchTerms, sets, currentSetCode } = this.props;
        const currentSet = sets.find(set => set.code === currentSetCode);
        let setDollars = 0;
        let setEuros = 0;
        let setTix = 0;
        if (cardsResult && cardsResult.cards) {
            setDollars = cardsResult.cards.map(c => {
                const parsedCost = Number.parseFloat(c.usd);
                return parsedCost ? parsedCost : 0;
            }).reduce((prev, next) => +(prev + next).toFixed(2));
            setEuros = cardsResult.cards.map(c => {
                const parsedCost = Number.parseFloat(c.eur);
                return parsedCost ? parsedCost : 0;
            }).reduce((prev, next) => +(prev + next).toFixed(2));
            setTix = cardsResult.cards.map(c => {
                const parsedCost = Number.parseFloat(c.tix);
                return parsedCost ? parsedCost : 0;
            }).reduce((prev, next) => +(prev + next).toFixed(2));
        }
        return (
            <div className="main">
                {currentSet &&
                    <div className="set-header">
                        <div className="inner-flex">
                            <div className="set-header-title">
                                <img aria-hidden="true" className="set-header-symbol" src={currentSet.icon_svg_uri} />
                                <div className="set-header-title-words">
                                    <h1 className="set-header-title-h1">{currentSet.name} ({currentSet.code.toUpperCase()})</h1>
                                    <p className="set-header-title-subline">
                                        {currentSet.card_count}&nbsp;cards
                                    <span className="punct"> • </span>
                                        Released&nbsp;{currentSet.released_at}
                                    {setDollars > 0 && 
                                        <span className="punct"> • </span>
                                    }
                                    {setDollars > 0 && 
                                        `$${setDollars}`
                                    }
                                    {setEuros > 0 && 
                                        <span className="punct"> • </span>
                                    }
                                    {setEuros > 0 && 
                                        `€${setEuros}`
                                    }
                                    {setTix > 0 && 
                                        <span className="punct"> • </span>
                                    }
                                    {setTix > 0 && 
                                            `${setTix}&nbsp;TIX`
                                    }
                                </p>
                                </div>
                            </div>

                            <div className="set-header-controls" data-component="search-controls-form">
                                <button className={`button-conjoined-left-inverted button-icon-left ${cardFormat === CardFormat.Image ? 'checked' : ''}`}  onClick={event => this.changeListDisplay(CardFormat.Image)}>
                                    {cardFormat === CardFormat.Image &&
                                        <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-3-8.906l-4.562-5.094-1.438 1.375 6 6.625 12-12.562-1.406-1.438-10.594 11.094z" /></svg>
                                    }
                                    Images
                                </button>        
                                <a className={`button-conjoined-middle-inverted button-icon-left ${cardFormat === CardFormat.List ? 'checked' : ''}`}  onClick={event => this.changeListDisplay(CardFormat.List)}>
                                    {cardFormat === CardFormat.List &&
                                        <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-3-8.906l-4.562-5.094-1.438 1.375 6 6.625 12-12.562-1.406-1.438-10.594 11.094z" /></svg>
                                    }
                                    Pricelist
                                </a>        
                                <a className={`button-conjoined-right-inverted button-icon-left ${cardFormat === CardFormat.Full ? 'checked' : ''}`}  onClick={event => this.changeListDisplay(CardFormat.Full)}>
                                    {cardFormat === CardFormat.Full &&
                                        <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-3-8.906l-4.562-5.094-1.438 1.375 6 6.625 12-12.562-1.406-1.438-10.594 11.094z" /></svg>
                                    }
                                    Full
                                </a>
                                <label htmlFor="order">sorted by</label>
                                <select name="order" id="order" className="button-select js-search-option" data-other-param="as" data-other-param-value="full" onChange={event => this.orderChange(event.currentTarget.value as SearchOrder)} value={searchTerms.order}>
                                    {Object.keys(SearchOrder).filter(key => isNaN(Number(SearchOrder[key]))).map((key, keyIndex) => {
                                        return (
                                            <option value={SearchOrder[key]} key={key}>{SearchOrderFormat[key]}</option>
                                        );
                                    })}
                                </select>
                            </div>

                        </div>
                    </div>
                }
                {cardsResult && cardsResult.cards &&
                    <CardDisplay cards={cardsResult.cards} cardFormat={cardFormat} addCardToDeck={addCardToDeck} />
                }
                {!(cardsResult && cardsResult.cards) &&
                    <div className="search-empty">
                        <div className="inner-flex">
                            <svg aria-hidden="true" focusable="false" className="search-empty-status" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M5 0v20l10 10 10-10v-20h-20zm18 19.172l-8 8-8-8v-17.172h16v17.172zm-3-11.172h-10v2h10v-2z" /></svg>

                            <h1>No cards found</h1>
                            <p>
                                Your search didn’t find any cards.
                            Adjust your terms or try one of the links below:
                        </p>
                            <p>
                                <a className="button-primary js-back-link" href="/">Go Back</a>
                                <a className="button-primary" href="/reference">Syntax Guide</a>
                                <a className="button-primary" href="/advanced">Advanced Search</a>
                            </p>
                        </div>
                    </div>
                }
            </div>
        );
    }

    private changeListDisplay(cardFormat: CardFormat) {
        const newState = { ...this.state, cardFormat };
        this.setState(newState);
    }
    
    private orderChange (order: SearchOrder) {        
        const newSearchTerms = {...this.props.searchTerms, order};
        this.props.fetchFilteredCards(newSearchTerms, true);
    }
}