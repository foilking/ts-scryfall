import { connect } from 'react-redux';
import { State } from '../../reducers';
import { CardsPage } from './page';

const mapStateToProps = (state: State, ownProps: any) => {   
    return {
        cardsResult: state.cardsResult,
        location: ownProps.location,
        searchTerms: state.searchTerms,
        fetchFilteredCards: ownProps.fetchFilteredCards
    };
};

const mapDispatchToProps = (dispatch: any) => ({
});

export const CardsPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CardsPage);