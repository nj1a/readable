import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import withStyles from 'material-ui/styles/withStyles'
import upperFirst from 'lodash/upperFirst'

import * as types from '../utils/PropTypes'

const styles = theme => ({
    listItem: {
        background: theme.palette.background.paper,
        margin: 10,
    }
})

const Category = ({ posts, category, classes }) => 
    <div>
        <h1>{upperFirst(category)} Posts</h1>
        <List>
            {posts.map(post =>
                <ListItem button component={Link} key={post.id} to={`/posts/${post.id}`} className={classes.listItem} >    
                    <Avatar>{post.voteScore}</Avatar>    
                    <ListItemText primary={post.title} secondary={(new Date(post.timestamp)).toDateString()} />
                </ListItem>)}
        </List>
    </div>

Category.protoTypes = {
    posts: types.posts.isRequired,
    category: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Category)
