import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { State } from '../../reducers';
import { CardsPage } from './page';
import { addCardToDeckAction } from '../../common/actions';
import { Card } from '../../model';

const mapStateToProps = (state: State, ownProps: any) => {     
    return {
        search: ownProps.match.params.search,
        cardsResult: state.cardsResult,
        location: ownProps.location,
        searchTerms: state.searchTerms,
        fetchFilteredCards: ownProps.fetchFilteredCards
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    addCardToDeck: (card: Card) => dispatch(addCardToDeckAction(card))
});

export const CardsPageContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(CardsPage));