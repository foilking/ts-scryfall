import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as QueryString from 'query-string';
import { State } from './reducers';
import { App } from './App';
import { fetchFilteredCardsAction, updateSearchTermsAction } from './common/actions';
import { SearchTerms, SearchOrder } from './model';

const mapStateToProps = (state: State, ownProps: any) => {  
    let searchTerms = null;   
    
    if (ownProps.location.search) {
        var qs = QueryString.parse(ownProps.location.search);        
        const q = qs.q;
        const page = +qs.page || 1;
        const order = qs.order as SearchOrder || SearchOrder.Name;

        searchTerms = {
            q: q,
            page: page,
            order: order
        } as SearchTerms;
    } 
     
    return {
        searchTerms: searchTerms || state.searchTerms
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchFilteredCards: (params: SearchTerms) => dispatch(fetchFilteredCardsAction(params)),
    updateSearchTerms: (params: SearchTerms) => dispatch(updateSearchTermsAction(params))
});

export const AppContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));