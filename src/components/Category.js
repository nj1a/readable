import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import withStyles from 'material-ui/styles/withStyles'

import * as types from '../utils/PropTypes'

const styles = theme => ({
    listItem: {
        background: theme.palette.background.paper,
        margin: 10,
    }
})

const Category = ({ title, loadingLabel, posts, category, classes }) => 
    <div>
        <h1>{title} Posts</h1>
        <List>
            {posts.map(post =>
                <ListItem button component={Link} key={post.id} to={`/posts/${post.id}`} className={classes.listItem} >    
                    <Avatar>{post.voteScore}</Avatar>    
                    <ListItemText primary={post.title} secondary={(new Date(post.timestamp)).toDateString()} />
                </ListItem>)}
        </List>
    </div>

Category.protoTypes = {
    title: PropTypes.string.isRequired,
    loadingLabel: PropTypes.string.isRequired,
    posts: types.posts.isRequired,
    category: PropTypes.string
}

export default withStyles(styles)(Category)
