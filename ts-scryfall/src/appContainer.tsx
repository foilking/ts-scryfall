import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { State } from './reducers';
import { App } from './App';
import { fetchFilteredCardsAction, updateSearchTermsAction } from './common/actions';
import { SearchTerms, SearchOrder } from './model';
import { fetchRandomCardAsyncAction } from './common/actions/fetchRandomCard';

const mapStateToProps = (state: State, ownProps: any) => {  
    let searchTerms = {
        q: '',
        page: 1,
        order: SearchOrder.Name,
        name: '',
        oracle: '',
        type: '',
        allowPartialTypeMatch: false,
        colors: [],
        requiresMulticolored: false,
        excludeUnselectedColors: false,
        allowPartialColorMatch: false,
        mana: '',
        formats: [],
        commanderIdentity: [],
        sets: [],
        rarities: [],
        artist: '',
        flavor: '',
        lore: '',
        display: '',
        showAllPrints: false,
        includeFunny: false
    } as SearchTerms; 
    
    searchTerms = {...searchTerms, ...state.searchTerms};

    return {
        searchTerms: searchTerms || state.searchTerms,
        location: ownProps.location
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchFilteredCards: (params: SearchTerms, getAll: boolean) => dispatch(fetchFilteredCardsAction(params, getAll)),
    updateSearchTerms: (params: SearchTerms) => dispatch(updateSearchTermsAction(params)),
    fetchRandomCard: () => dispatch(fetchRandomCardAsyncAction())
});

export const AppContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));