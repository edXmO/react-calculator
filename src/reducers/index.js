import { combineReducers } from 'redux';
// Reducers
import interactionReducer from './interactionReducer';
import operatorReducer from './operatorReducer';

export default combineReducers({
    interact: interactionReducer,
    operate: operatorReducer
});