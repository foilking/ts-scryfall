import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Header, Footer } from './components';
import { SearchTerms } from './model';
import { ScryfallRouter } from './router';

interface Props {
  searchTerms: SearchTerms;
  fetchFilteredCards: (searchTerms: SearchTerms, getAll?: boolean) => void;
  updateSearchTerms: (searchTerms: SearchTerms) => void;
  fetchRandomCard: () => void;
}
interface State {
}

export class App extends React.Component<Props & RouteComponentProps<Props>, State> {
  constructor(props: Props & RouteComponentProps<Props>) {
    super(props);

    this.fetchFilteredCards = this.fetchFilteredCards.bind(this);
  }

  public render() {         
    const { searchTerms, fetchRandomCard } = this.props; 
    
    return (
        <div id="body">
          <Header {...this.props} fetchFilteredCards={this.fetchFilteredCards} fetchRandomCard={fetchRandomCard} />
          <ScryfallRouter searchTerms={searchTerms} fetchFilteredCards={this.fetchFilteredCards} location={location} />
          <Footer />
      </div>
    );
  }
  
  private fetchFilteredCards(searchTerms: SearchTerms, getAll: boolean = false) {
    const newSearchTerms = {...this.props.searchTerms, ...searchTerms}; 
    
    this.props.fetchFilteredCards(newSearchTerms);
    this.props.updateSearchTerms(newSearchTerms);
  }
}