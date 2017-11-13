import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchCardByCodeAndCollectorNumberAsyncAction } from './actions/fetchCard';
import { CardPage } from './page';

const mapStateToProps = (state: State, ownProps: any) => ({
    setCode: ownProps.params.code,
    collectorNumber: ownProps.params.number,
    location: ownProps.location,
    card: state.card,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchCardByCodeAndCollectorNumber: (setCode: string, collectorNumber: string) => dispatch(fetchCardByCodeAndCollectorNumberAsyncAction(setCode, collectorNumber))
});

export const CardPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardPage);