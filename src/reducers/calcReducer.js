import { CLEAR_SCREEN, DELETE, DECIMAL, DISPLAY_SCREEN, KEYNUMBER_PRESS, EQUALS, ADD, SUBTRACT, DIVIDE, MULTIPLY, MOD, EXP } from '../actions/types';
import INITIAL_STATE from '../models/initState';

const calcReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DISPLAY_SCREEN:
            return { ...state, screen: action.payload }
        case KEYNUMBER_PRESS:
            return { ...state, lastKey: action.payload.key, lastType: action.payload.type }
        case CLEAR_SCREEN:
            return { ...state, screen: '', lastKey: '', lastType: '', result: '' }
        case DELETE:
            return { ...state, screen: action.payload.result, lastType: action.payload.type }
        case DECIMAL:
            return { ...state, screen: action.payload.result, lastType: action.payload.type }
        case ADD:
            return { ...state, screen: action.payload.result, lastType: action.payload.type }
        case SUBTRACT:
            return { ...state, screen: action.payload.result, lastType: action.payload.type }
        case DIVIDE:
            return { ...state, screen: action.payload.result, lastType: action.payload.type }
        case MULTIPLY:
            return { ...state, screen: action.payload.result, lastType: action.payload.type }
        case MOD:
            return { ...state, screen: action.payload.result, lastType: action.payload.type }
        case EXP:
            return { ...state, screen: action.payload.result, lastType: action.payload.type }
        case EQUALS:
            return { ...state, result: action.payload.toFixed(2), screen: '' }
        default:
            return state;
    }
}

export default calcReducer;