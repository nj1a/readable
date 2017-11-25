import React from 'react';
import { Route, Link } from 'react-router-dom';

import App from './App';
import CategoryPage from './CategoryPage';
import PostPage from './PostPage';
import EditPostPage from './EditPostPage';
import DeletePostPage from './DeletePostPage';
import AddPostPage from './AddPostPage';

const Root = () => (
    <div className="app">
        <Route exact path='/' component={App} />
        <Route exact path='/:category/posts' component={CategoryPage} />
        <Route exact path='/posts/:id' component={PostPage} />
        <Route exact path='/posts/:id/edit' component={EditPostPage} />
        <Route exact path='/posts/:id/delete' component={DeletePostPage} />
        <Route exact path='/add/post' component={AddPostPage} />
        <Link to='/add/post'>Add Post</Link>
        <Link to='/'>Return to Home Page</Link>
    </div>
)

export default Root;
