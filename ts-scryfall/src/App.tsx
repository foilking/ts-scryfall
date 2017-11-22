import * as React from 'react';
import { Header, Footer } from './components';
import { SearchTerms } from './model';
import { ScryfallRouter } from './router';

interface Props {
  searchTerms: SearchTerms;
  location: Location;
  fetchFilteredCards: (searchTerms: SearchTerms) => void;
  updateSearchTerms: (searchTerms: SearchTerms) => void;
  loadSearchPage: (searchTerm: string) => void;
}
interface State {
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.fetchFilteredCards = this.fetchFilteredCards.bind(this);
  }

  public render() {     
    const { searchTerms } = this.props; 
    
    return (
        <div id="body">
          <Header searchTerms={searchTerms} fetchFilteredCards={this.fetchFilteredCards} location={location}/>
          <ScryfallRouter searchTerms={searchTerms} fetchFilteredCards={this.fetchFilteredCards} location={location} />
          <Footer />
      </div>
    );
  }
  
  private fetchFilteredCards(searchTerms: SearchTerms) {
    const newSearchTerms = {...this.props.searchTerms, ...searchTerms};  
    this.props.fetchFilteredCards(newSearchTerms);
    this.props.updateSearchTerms(newSearchTerms);
    if (!(this.props.location.pathname.indexOf('/cards/') > -1)) {
      console.log('Change to search page.');
      
      this.props.loadSearchPage(newSearchTerms.q);
    }
  }
}