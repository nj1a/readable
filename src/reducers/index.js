import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import * as ActionTypes from '../actions';

const entities = (state = { categories: {}, posts: {} }, action) => 
    (action.res && action.res.entities)
        ? merge({}, state, action.res.entities)
        : state

const errorMessage = (state = null, action) => {
    const { type, error } = action;
    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return error
    }
    return state
};

const rootReducer = combineReducers({
    entities,
    errorMessage
});

export default rootReducer;
