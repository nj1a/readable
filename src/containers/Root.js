import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import TopLeft from './TopLeft'
import App from './App'
import CategoryPage from './CategoryPage'
import PostPage from './PostPage'
import EditPostPage from './EditPostPage'
import DeletePostPage from './DeletePostPage'
import AddPostPage from './AddPostPage'
import AddCommentPage from './AddCommentPage'
import EditCommentPage from './EditCommentPage'
import DeleteCommentPage from './DeleteCommentPage'

const styles = theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
})

const Root = ({ classes }) => (
    <div className={classes.root}>
        <TopLeft />
        <main className={classes.content}>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/categories/:category/posts' component={CategoryPage} />
                <Route exact path='/posts/add' component={AddPostPage} />
                <Route exact path='/posts/:id' component={PostPage} />
                <Route exact path='/posts/:id/edit' component={EditPostPage} />
                <Route exact path='/posts/:id/delete' component={DeletePostPage} />
                <Route exact path='/posts/:parentId/comments/add' component={AddCommentPage} />
                <Route exact path='/comments/:id/edit' component={EditCommentPage} />
                <Route exact path='/comments/:id/delete' component={DeleteCommentPage} />
            </Switch>    
        </main>
    </div>
)

Root.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Root)
