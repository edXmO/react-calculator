import {
    ADD, SUBTRACT, DIVIDE, MULTIPLY, MOD, EXP, EQUALS
} from '../actions/types';

const INITIAL_STATE = { result: '0' };

const operatorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
            console.log('Adding operation');
        case SUBTRACT:
            console.log('Adding operation');
        case DIVIDE:
            console.log('Adding operation');
        case MULTIPLY:
            console.log('Adding operation');
        case MOD:
            console.log('Adding operation');
        case EXP:
            console.log('Adding operation');
        case EQUALS:
            return { ...state, result: action.payload }
        default:
            return state;
    }
}


export default operatorReducer;