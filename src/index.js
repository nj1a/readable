import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Root from './containers/Root';
import configureStore from './store/configureStore'

// import * as api from './utils/api'

const store = configureStore()

// api.getAllCategories().then(a => console.log(a))
// api.getPostsOfCategory('react').then(a=> console.log(a))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
