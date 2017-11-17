import { connect } from 'react-redux';
import { State } from '../../reducers';
import { withRouter } from 'react-router-dom';
// import { Set } from '../../model';
import { fetchSetsAction, updateSearchTermsAction } from '../../common/actions';
import { AdvanceSearchPage } from './page';
import { SearchTerms } from '../../model/index';

const mapStateToProps = (state: State, ownProps: any) => {
    console.log('Advanced Page Container');
    
    console.log(ownProps.searchTerms);
    return {
        searchTerms: ownProps.searchTerms,
        fetchFilteredCards: ownProps.fetchFilteredCards,
        sets: state.sets
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchSets: () => dispatch(fetchSetsAction()),
    updateSearchTerms: (searchTerms: SearchTerms) => dispatch(updateSearchTermsAction(searchTerms))
});

export const AdvanceSearchPageContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdvanceSearchPage));