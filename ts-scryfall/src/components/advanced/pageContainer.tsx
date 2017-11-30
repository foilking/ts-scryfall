import { connect } from 'react-redux';
import { State } from '../../reducers';
import { withRouter } from 'react-router-dom';
// import { Set } from '../../model';
import { fetchSetsAction } from '../../common/actions';
import { AdvanceSearchPage } from './page';

const mapStateToProps = (state: State, ownProps: any) => {
    return {
        searchTerms: ownProps.searchTerms,
        sets: state.sets,
        updateSearchTerms: ownProps.updateSearchTerms
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchSets: () => dispatch(fetchSetsAction())
});

export const AdvanceSearchPageContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdvanceSearchPage));