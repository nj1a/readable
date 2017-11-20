import React from 'react';
import { Route, Link } from 'react-router-dom';

import App from './App';
import CategoryPage  from './CategoryPage';

const Root = () => (
    <div className="app">
        <Route exact path='/' component={App} />
        <Route path='/:category/posts' component={CategoryPage} />
        <Link  to='/'>Return to Home Page</Link>
    </div>
)

export default Root;