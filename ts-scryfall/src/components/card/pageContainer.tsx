import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchCardByCodeAndCollectorNumberAsyncAction, addCardToDeckAction } from '../../common/actions';
import { CardPage } from './page';
import { Card } from '../../model';

const mapStateToProps = (state: State, ownProps: any) => {    
    return {
        setCode: ownProps.match.params.code,
        collectorNumber: ownProps.match.params.number,
        location: ownProps.location,
        card: state.card,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchCardByCodeAndCollectorNumber: (setCode: string, collectorNumber: string) => dispatch(fetchCardByCodeAndCollectorNumberAsyncAction(setCode, collectorNumber)),
    addCardToDeck: (card: Card) => dispatch(addCardToDeckAction(card))
});

export const CardPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardPage);