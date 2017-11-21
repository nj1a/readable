import React from 'react';
import { Route, Link } from 'react-router-dom';

import App from './App';
import CategoryPage from './CategoryPage';
import PostPage from './PostPage';

const Root = () => (
    <div className="app">
        <Route exact path='/' component={App} />
        <Route path='/:category/posts' component={CategoryPage} />
        <Route path='/posts/:id' component={PostPage} />
        <Link  to='/'>Return to Home Page</Link>
    </div>
)

export default Root;