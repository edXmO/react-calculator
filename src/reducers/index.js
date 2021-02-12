import { combineReducers } from 'redux';
// Reducers
import calcReducer from './calcReducer';

export default combineReducers({
    calculator: calcReducer
});