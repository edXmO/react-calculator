import { CLEAR_SCREEN, DELETE, DECIMAL, DISPLAY_SCREEN, KEYNUMBER_PRESS } from '../actions/types';

const INITIAL_STATE = { screen: '0' };

const interactionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KEYNUMBER_PRESS:
            console.log('KEYNUMBER_PRESSED');
        case DISPLAY_SCREEN:
            console.log('DISPLAY');
        case CLEAR_SCREEN:
            console.log('CLEARING_SCREEN');
        case DELETE:
            console.log('DELETE');
        case DECIMAL:
            console.log('DECIMAL');
        default:
            return state;
    }
}

export default interactionReducer;