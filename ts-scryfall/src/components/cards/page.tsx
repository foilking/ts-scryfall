import * as React from 'react';
import { CardsResponse, SearchTerms, Card } from '../../model';
import { CardDisplay } from '../../common/components/card';
import { CardFormat } from '../../common/constants/cardFormats';
import { SearchControls } from './searchControls';
import { NoCards } from './noCards';

interface Props {
    search: string;
    cardsResult: CardsResponse;
    searchTerms: SearchTerms;
    location: Location;
    addCardToDeck: (card: Card) => void;
    fetchFilteredCards: (searchTerms: SearchTerms) => void;
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
                
        if (this.props.searchTerms.q !== this.props.search) {
            
            const searchTerms = {...this.props.searchTerms, q: this.props.search};
            this.props.fetchFilteredCards(searchTerms);
        }
    }

    // public componentWillReceiveProps() {
    //     if ((!this.props.searchTerms.q && this.props.search) || (this.props.searchTerms.q !== this.props.search)) {
    //         console.log('Cards page componentWillReceiveProps different search terms');    
    //         console.log(`Q: ${this.props.searchTerms.q}`);
    //         console.log(`Search: ${this.props.search}`);
            
    //         const searchTerms = {...this.props.searchTerms, q: this.props.search};
    //         this.props.fetchFilteredCards(searchTerms);
    //     }
    // }

    public render() {
        const { cardFormat } = this.state;
        const { searchTerms, cardsResult, fetchFilteredCards, addCardToDeck } = this.props;
        document.title = (this.props.searchTerms.q || 'Search') + ' | TS Scryfall';
        let cards = <NoCards />;
        if (cardsResult && cardsResult.cards && cardsResult.cards.length) {
            cards = <CardDisplay cards={cardsResult.cards} cardFormat={cardFormat} addCardToDeck={addCardToDeck}/>;
        }
        
        return (
            <div id="main" className="main">
                <SearchControls searchTerms={searchTerms} cardFormat={cardFormat} resultCount={cardsResult ? cardsResult.total_cards : 0} hasMore={cardsResult ? cardsResult.has_more : false} fetchFilteredCards={fetchFilteredCards} changeListDisplay={this.changeListDisplay} />
                {/* <SearchControlsMobile /> */}
                {cards}
                {cardsResult && cardsResult.total_cards > 9 &&
                    <SearchControls searchTerms={searchTerms} cardFormat={cardFormat} resultCount={cardsResult ? cardsResult.total_cards : 0} hasMore={cardsResult ? cardsResult.has_more : false} fetchFilteredCards={fetchFilteredCards} changeListDisplay={this.changeListDisplay} />
                }
            </div>
        );
    }
    
    private changeListDisplay(cardFormat: CardFormat) {
        const newState = {...this.state, cardFormat};
        this.setState(newState);
    }
}