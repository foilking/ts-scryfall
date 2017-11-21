import * as React from 'react';
import { Header, Footer } from './components';
import { SearchTerms } from './model';
import { ScryfallRouter } from './router';

interface Props {
  searchTerms: SearchTerms;
  location: Location;
  fetchFilteredCards: (searchTerms: SearchTerms) => void;
  updateSearchTerms: (searchTerms: SearchTerms) => void;
}
interface State {
  searchTerms: SearchTerms;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerms: props.searchTerms
    };

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
    this.props.fetchFilteredCards(newState.searchTerms);
    this.props.updateSearchTerms(newState.searchTerms);
  }
}