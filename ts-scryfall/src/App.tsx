import * as React from 'react';
import { RouteComponentProps } from 'react-router';
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

export class App extends React.Component<Props & RouteComponentProps<Props>, State> {
  constructor(props: Props & RouteComponentProps<Props>) {
    super(props);

    this.fetchFilteredCards = this.fetchFilteredCards.bind(this);
  }

  public render() {     
    const { searchTerms } = this.props; 
    
    return (
        <div id="body">
          <Header {...this.props}/>
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
      this.props.loadSearchPage(newSearchTerms.q);
    }
  }
}