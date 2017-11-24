import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Root from './containers/Root';
import configureStore from './store/configureStore'

import './index.css';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter> 
            <Root />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
