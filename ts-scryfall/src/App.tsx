import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Header, Footer } from './components';
import { SearchTerms } from './model';
import { ScryfallRouter } from './router';

interface Props {
  searchTerms: SearchTerms;
  fetchFilteredCards: (searchTerms: SearchTerms, getAll?: boolean) => void;
  updateSearchTerms: (searchTerms: SearchTerms) => void;
}
interface State {
}

export class App extends React.Component<Props & RouteComponentProps<Props>, State> {
  constructor(props: Props & RouteComponentProps<Props>) {
    super(props);

    this.updateSearchTerms = this.updateSearchTerms.bind(this);
  }

  public render() {     
    const { searchTerms } = this.props; 
    
    return (
        <div id="body">
          <Header {...this.props} updateSearchTerms={this.updateSearchTerms} />
          <ScryfallRouter searchTerms={searchTerms} updateSearchTerms={this.updateSearchTerms} location={location} />
          <Footer />
      </div>
    );
  }
  
  private updateSearchTerms(searchTerms: SearchTerms) {
    const newSearchTerms = {...this.props.searchTerms, ...searchTerms}; 
    
    this.props.fetchFilteredCards(newSearchTerms);
    this.props.updateSearchTerms(newSearchTerms);
  }
}