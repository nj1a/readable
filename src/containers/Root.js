import React from 'react'
import { Route, Switch } from 'react-router-dom'

import TopAppBar from './TopAppBar'
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
    <div>
        <TopAppBar />
        <Switch>
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
    </div>
)

export default Root
