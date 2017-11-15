import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './containers/App';
import configureStore from './store/configureStore'

const store = configureStore()

// import { getAllCategories } from './utils/api'
// const headers = { Authorization: 'ashtrg43sf' }
// fetch(`http://localhost:3001/categories`, { headers })
//     .then(res => res.json())
//     .then(data => console.log(data))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
