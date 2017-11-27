import { connect } from 'react-redux';
import { State } from '../../reducers';
import {  } from '../../common/actions';
import { DecksPage } from './page';

const mapStateToProps = (state: State, ownProps: any) => {    
    return {
        decks: state.decks
    };
};

const mapDispatchToProps = (dispatch: any) => ({
});

export const DecksPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DecksPage);