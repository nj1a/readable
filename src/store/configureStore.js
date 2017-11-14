import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from '../reducers'
import api from '../middleware/api'

const configureStore = preloadedState => createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, api, logger)
)

export default configureStore
