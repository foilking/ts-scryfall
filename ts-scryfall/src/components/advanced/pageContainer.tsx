import { connect } from 'react-redux';
import { State } from '../../reducers';
// import { Set } from '../../model';
// import { fetchSetsAction } from '../../common/actions';
import { AdvanceSearchPage } from './page';

const mapStateToProps = (state: State, ownProps: any) => ({
    // sets: state.sets
});

const mapDispatchToProps = (dispatch: any) => ({
    // fetchSets: () => dispatch(fetchSetsAction()),
});

export const AdvanceSearchPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdvanceSearchPage);