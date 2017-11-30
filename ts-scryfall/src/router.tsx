import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CardsPageContainer, CardPageContainer, AdvanceSearchPageContainer, About, Reference, SetsPageContainer, DeckPageContainer, SetPageContainer } from './components';
import { SearchTerms } from './model/index';

interface RouterProps {
  searchTerms: SearchTerms;
  updateSearchTerms: (searchTerms: SearchTerms) => void;
  location: Location;
}

export class ScryfallRouter extends React.Component<RouterProps, {}> {
  constructor(props: RouterProps) {
    super(props);
  }

  public render() {    
    return (
      <Switch>
        <Route exact={true} path={`/`} component={About}/>
        <Route path={`/cards/:search?`} render={(props) => <CardsPageContainer {...props}  updateSearchTerms={this.props.updateSearchTerms} />} />
        <Route path={`/card/:code/:number`} component={CardPageContainer} />
        <Route path={`/advanced`} render={(props) => <AdvanceSearchPageContainer {...props}  updateSearchTerms={this.props.updateSearchTerms} searchTerms={this.props.searchTerms} />} />
        <Route path={`/deck`} render={(props) => <DeckPageContainer {...props} />} /> 
        <Route path={`/about`} component={About} />
        <Route path={`/reference`} component={Reference} />
        <Route path={`/sets`} component={SetsPageContainer} />
        <Route path={`/set/:code`} render={(props) => <SetPageContainer {...props} updateSearchTerms={this.props.updateSearchTerms} />} />
      </Switch>
    );
  }
}