import { CLEAR_SCREEN, DELETE, DECIMAL, DISPLAY_SCREEN, KEYNUMBER_PRESS } from '../actions/types';

const INITIAL_STATE = { screen: '0', key: '', operationHistory: '0' };

const interactionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KEYNUMBER_PRESS:
            return { ...state, key: action.payload }
        case DISPLAY_SCREEN:
            return { ...state, screen: action.payload.updatedDisplay, operationHistory: action.payload.updatedDisplay }
        case CLEAR_SCREEN:
            return { ...state, screen: '0' }
        case DELETE:
            return { ...state, screen: action.payload }
        case DECIMAL:
            return { ...state, screen: action.payload }
        default:
            return state;
    }
}

export default interactionReducer;