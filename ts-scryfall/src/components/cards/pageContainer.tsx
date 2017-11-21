import { connect } from 'react-redux';
import { State } from '../../reducers';
import { CardsPage } from './page';
import { addCardToDeckAction } from '../../common/actions';
import { Card } from '../../model';

const mapStateToProps = (state: State, ownProps: any) => {      
    return {
        cardsResult: state.cardsResult,
        location: ownProps.location,
        searchTerms: state.searchTerms,
        fetchFilteredCards: ownProps.fetchFilteredCards,
        search: ownProps.match.params.search
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    addCardToDeck: (card: Card) => dispatch(addCardToDeckAction(card))
});

export const CardsPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CardsPage);