import {
    ADD, SUBTRACT, DIVIDE, MULTIPLY, MOD, EXP
} from '../actions/types';

const INITIAL_STATE = {};

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
        default:
            return state;
    }
}


export default operatorReducer;