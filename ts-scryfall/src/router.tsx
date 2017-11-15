import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CardsPageContainer, CardPageContainer, AdvanceSearchPageContainer, About, Reference, SetsPageContainer } from './components';
import { SearchTerms } from './model/index';

interface RouterProps {
  searchTerms: SearchTerms;
  fetchFilteredCards: (searchTerms: SearchTerms) => void;
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
        <Route path={`/cards`} render={(props) => <CardsPageContainer {...props}  fetchFilteredCards={this.props.fetchFilteredCards}/>} />
        <Route path={`/card/:code/:number`} component={CardPageContainer} />
        <Route path={`/advanced`} component={AdvanceSearchPageContainer} />
        <Route path={`/about`} component={About} />
        <Route path={`/reference`} component={Reference} />
        <Route path={`/sets`} component={SetsPageContainer} />
      </Switch>
    );
  }
}