import { CLEAR_SCREEN, DELETE, DECIMAL, DISPLAY_SCREEN, KEYNUMBER_PRESS, EQUALS, OPERATOR } from '../actions/types';
import INITIAL_STATE from '../models/initState';


const calcReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DISPLAY_SCREEN:
            return { ...state, screen: action.payload }
        case KEYNUMBER_PRESS:
            return { ...state, lastKey: action.payload.key, lastType: action.payload.type, keyHistory: action.payload.updatedKeyHistory }
        case CLEAR_SCREEN:
            return { ...state, screen: '', lastKey: '', lastType: '', result: '', keyHistory: '' }
        case DELETE:
            return { ...state, screen: action.payload }
        case DECIMAL:
            return { ...state, screen: action.payload.updatedDisplay, lastType: action.payload.type }
        case OPERATOR:
            return { ...state, screen: action.payload.result, lastType: action.payload.type }
        case EQUALS:
            return { ...state, result: action.payload.toFixed(2), screen: '' }
        default:
            return state;
    }
}

export default calcReducer;