import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { State } from '../../reducers';
import { SetPage } from './page';
import { addCardToDeckAction, fetchSetsAction } from '../../common/actions';
import { Card } from '../../model';

const mapStateToProps = (state: State, ownProps: any) => {     
    let searchTerms = state.searchTerms;
    if (ownProps.match.params.code) {
        searchTerms = {...state.searchTerms, q: `++e:${ownProps.match.params.code}`};
    } 
    return {
        cardsResult: state.cardsResult,
        searchTerms: searchTerms,
        fetchFilteredCards: ownProps.fetchFilteredCards,
        sets: state.sets,
        currentSetCode: ownProps.match.params.code
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    addCardToDeck: (card: Card) => dispatch(addCardToDeckAction(card)),
    fetchSets: () => dispatch(fetchSetsAction())
});

export const SetPageContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(SetPage));