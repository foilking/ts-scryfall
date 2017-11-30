import * as React from 'react';
import { CardsResponse, SearchTerms, Card } from '../../model';
import { CardDisplay } from '../../common/components/card';
import { CardFormat } from '../../common/constants/cardFormats';
import { SearchControls } from './searchControls';

interface Props {
    search: string;
    cardsResult: CardsResponse;
    searchTerms: SearchTerms;
    location: Location;
    addCardToDeck: (card: Card) => void;
    updateSearchTerms: (searchTerms: SearchTerms) => void;
}

interface State {
    cardFormat: CardFormat;
}

export class CardsPage extends React.Component<Props, State> {
    constructor(props: Props) {        
        super(props);   

        this.state = {
            cardFormat: CardFormat.Full
        };
        this.changeListDisplay = this.changeListDisplay.bind(this);
        if (!this.props.searchTerms.q && this.props.search) {
            const searchTerms = {...this.props.searchTerms, q: this.props.search};
            this.props.updateSearchTerms(searchTerms);
        }
    }

    public render() {
        const { cardFormat } = this.state;
        const { searchTerms, cardsResult, updateSearchTerms, addCardToDeck } = this.props;
        document.title = (this.props.searchTerms.q || 'Search') + ' | TS Scryfall';
        
        return (
            <div id="main" className="main">
                <SearchControls searchTerms={searchTerms} cardFormat={cardFormat} resultCount={cardsResult ? cardsResult.total_cards : 0} hasMore={cardsResult ? cardsResult.has_more : false} updateSearchTerms={updateSearchTerms} changeListDisplay={this.changeListDisplay} />
                {/* <SearchControlsMobile /> */}
                {cardsResult && cardsResult.cards &&
                    <CardDisplay cards={cardsResult.cards} cardFormat={cardFormat} addCardToDeck={addCardToDeck}/>
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
                {cardsResult && cardsResult.total_cards > 9 &&
                    <SearchControls searchTerms={searchTerms} cardFormat={cardFormat} resultCount={cardsResult ? cardsResult.total_cards : 0} hasMore={cardsResult ? cardsResult.has_more : false} updateSearchTerms={updateSearchTerms} changeListDisplay={this.changeListDisplay} />
                }
            </div>
        );
    }
    
    private changeListDisplay(cardFormat: CardFormat) {
        const newState = {...this.state, cardFormat};
        this.setState(newState);
    }
}