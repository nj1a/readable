import { combineReducers } from 'redux'
import merge from 'lodash/merge'

import * as ActionTypes from '../actions'

const entities = (state = { categories: {}, posts: {}, comments: {} }, action) => 
    (action.response && action.response.entities)
        ? merge({}, state, action.response.entities)
        : state

const errorMessage = (state = null, action) => {
    const { type, error } = action
    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return error
    }
    return state
}

const isLoading = (state = null, action) => {
    // should return true when isLoading is true or undefined
    return action.isLoading !== false
}

const rootReducer = combineReducers({
    entities,
    errorMessage,
    isLoading
})

export default rootReducer
