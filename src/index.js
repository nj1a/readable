import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Root from './containers/Root'
import configureStore from './store/configureStore'

import './index.css'

ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter> 
            <Root />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
