import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './containers/App';
import configureStore from './store/configureStore'

// import * as api from './utils/api'

const store = configureStore()

// api.getAllCategories().then(a => console.log(a))
// api.getPostsOfCategory('react').then(a=> console.log(a))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
