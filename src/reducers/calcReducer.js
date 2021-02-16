import { CLEAR_SCREEN, DELETE, DECIMAL, DISPLAY_SCREEN, KEYNUMBER_PRESS, EQUALS, ADD, SUBTRACT, DIVIDE, MULTIPLY, MOD, EXP } from '../actions/types';
import INITIAL_STATE from '../models/initState';

const calcReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KEYNUMBER_PRESS:
            return { ...state, lastKey: action.payload.key, lastType: action.payload.type }
        case DISPLAY_SCREEN:
            return { ...state, screen: action.payload }
        case CLEAR_SCREEN:
            return { ...state, screen: '', lastKey: '', lastType: '', result: '' }
        case DELETE:
            return { ...state, screen: action.payload }
        case DECIMAL:
            return { ...state, screen: action.payload }
        case ADD:
            return { ...state, screen: action.payload }
        case SUBTRACT:
            return { ...state, screen: action.payload }
        case DIVIDE:
            return { ...state, screen: action.payload }
        case MULTIPLY:
            return { ...state, screen: action.payload }
        case MOD:
            return { ...state, screen: action.payload }
        case EXP:
            return { ...state, screen: action.payload }
        case EQUALS:
            return { ...state, result: action.payload.toFixed(2), screen: '' }
        default:
            return state;
    }
}

export default calcReducer;