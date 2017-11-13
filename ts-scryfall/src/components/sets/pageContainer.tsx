import { connect } from 'react-redux';
import { State } from '../../reducers';
import { SetsPage } from './page';
import { fetchSetsAction } from '../../common/actions';

const mapStateToProps = (state: State, ownProps: any) => {
    return {
        sets: state.sets
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchSets: () => dispatch(fetchSetsAction())
});

export const SetsPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SetsPage);