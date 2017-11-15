import * as React from 'react';
import { Header, Footer } from './components';
import { SearchTerms, SearchOrder } from './model';
import { ScryfallRouter } from './router';

interface Props {
  searchTerms: SearchTerms;
  fetchFilteredCards: (searchTerms: SearchTerms) => void;
  updateSearchTerms: (searchTerms: SearchTerms) => void;
}
interface State {
  searchTerms: SearchTerms;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    
    super(props);
    const searchTerms = {
        q: '',
        order: SearchOrder.Name,
        page: 1
    } as SearchTerms;

    this.state = {
      searchTerms: this.props.searchTerms || searchTerms
    };
      
    if (location.pathname.indexOf('/cards') > -1) {
      document.title = (this.state.searchTerms.q || 'Search') + ' | TS Scryfall';
      this.props.fetchFilteredCards(this.state.searchTerms);
      this.props.updateSearchTerms(this.state.searchTerms);
    }

    this.fetchFilteredCards = this.fetchFilteredCards.bind(this);
  }

  public render() {     
    const { searchTerms } = this.state;        
    return (
        <div id="body">
          <Header searchTerms={searchTerms} fetchFilteredCards={this.fetchFilteredCards} location={location}/>
          <ScryfallRouter searchTerms={searchTerms} fetchFilteredCards={this.fetchFilteredCards} location={location} />
          <Footer />
      </div>
    );
  }
  
  private fetchFilteredCards(searchTerms: SearchTerms) {
    const newState = {...this.state, searchTerms};  
    this.setState(newState);
    this.props.fetchFilteredCards(searchTerms);
    this.props.updateSearchTerms(searchTerms);
  }
}