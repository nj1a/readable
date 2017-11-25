import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import App from './App'
import CategoryPage from './CategoryPage'
import PostPage from './PostPage'
import EditPostPage from './EditPostPage'
import DeletePostPage from './DeletePostPage'
import AddPostPage from './AddPostPage'
import AddCommentPage from './AddCommentPage'
import EditCommentPage from './EditCommentPage'
import DeleteCommentPage from './DeleteCommentPage'

const Root = () => (
    <div className="app">
        <Switch>  {/* make sure only one Route is matched */}
            <Route exact path='/' component={App} />
            <Route exact path='/:category/posts' component={CategoryPage} />
            <Route exact path='/posts/add' component={AddPostPage} />
            <Route exact path='/posts/:id' component={PostPage} />
            <Route exact path='/posts/:id/edit' component={EditPostPage} />
            <Route exact path='/posts/:id/delete' component={DeletePostPage} />
            <Route exact path='/posts/:parentId/comments/add' component={AddCommentPage} />
            <Route exact path='/comments/:id/edit' component={EditCommentPage} />
            <Route exact path='/comments/:id/delete' component={DeleteCommentPage} />
        </Switch>
        <Link to='/posts/add'>Add Post</Link>
        <Link to='/'>Return to Home Page</Link>
    </div>
)

export default Root
