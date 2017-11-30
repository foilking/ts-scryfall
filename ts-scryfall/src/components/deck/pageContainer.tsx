import { connect } from 'react-redux';
import { State } from '../../reducers';
import { addCardToDeckAction, removeCardFromDeckAction } from '../../common/actions';
import { DeckPage } from './page';
import { Card } from '../../model';

const mapStateToProps = (state: State, ownProps: any) => {    
    console.log('Deck State to Props');
    
    console.log(state);
    
    return {
        deck: state.deck
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    addCardToDeck: (card: Card) => dispatch(addCardToDeckAction(card)),
    removeCardFromDeck: (card: Card) => dispatch(removeCardFromDeckAction(card))
});

export const DeckPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckPage);