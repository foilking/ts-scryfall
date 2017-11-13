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
    console.log(process.env.PUBLIC_URL);
    
    return (
      <Switch>
        <Route exact={true} path={`${process.env.PUBLIC_URL}/`} component={About}/>
        <Route path={`${process.env.PUBLIC_URL}/cards`} render={(props) => <CardsPageContainer {...props}  fetchFilteredCards={this.props.fetchFilteredCards}/>} />
        <Route path={`${process.env.PUBLIC_URL}/card/:code/:number`} component={CardPageContainer} />
        <Route path={`${process.env.PUBLIC_URL}/advanced`} component={AdvanceSearchPageContainer} />
        <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
        <Route path={`${process.env.PUBLIC_URL}/reference`} component={Reference} />
        <Route path={`${process.env.PUBLIC_URL}/sets`} component={SetsPageContainer} />
      </Switch>
    );
  }
}