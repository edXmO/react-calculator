import { CLEAR_SCREEN, DELETE, DECIMAL, DISPLAY_SCREEN, KEYNUMBER_PRESS, EQUALS } from '../actions/types';
import INITIAL_STATE from '../models/initState';

const interactionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KEYNUMBER_PRESS:
            return { ...state, key: action.payload.key, type: action.payload.type }
        case DISPLAY_SCREEN:
            return { ...state, screen: action.payload }
        case CLEAR_SCREEN:
            return { ...state, screen: '', type: '', key: '' }
        case DELETE:
            return { ...state, screen: action.payload }
        case DECIMAL:
            return { ...state, screen: action.payload }
        case EQUALS:
            return state;
        default:
            return state;
    }
}

export default interactionReducer;