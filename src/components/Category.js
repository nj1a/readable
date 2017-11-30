import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Tooltip from 'material-ui/Tooltip'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Menu, { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'
import withStyles from 'material-ui/styles/withStyles'
import upperFirst from 'lodash/upperFirst'

import * as types from '../utils/PropTypes'

const styles = theme => ({
    div: {
        margin: 10,
    },
    listItem: {
        background: theme.palette.background.paper,
        margin: 10,
    },
    flex: {
        display: 'flex'
    },
    middleBuffer: {
        flex: '1 1 auto',
    },
})

const Category = ({ posts, category, classes, sortOpened, anchorEl, handleClick, handleRequestClose }) => 
    <div className={classes.div}>
        <div className={classes.flex}>
            <Typography type="headline">{upperFirst(category)} Posts</Typography>
            <div className={classes.middleBuffer} />
            <Button onClick={handleClick}>Sory By (desc)</Button>
            <Menu open={sortOpened} onRequestClose={handleRequestClose()} anchorEl={anchorEl}>
                {['voteScore', 'timestamp'].map(by => 
                    <MenuItem key={by} onClick={handleRequestClose(by)}>{by}</MenuItem>    
                )}
            </Menu>
        </div>
        <List>
            {posts.length
                ? (posts.map(post =>
                    <ListItem button component={Link} key={post.id} to={`/posts/${post.id}`} className={classes.listItem} >
                        <Tooltip title={`Score ${post.voteScore}`}>
                            <Avatar>{post.voteScore}</Avatar>
                        </Tooltip>
                        <ListItemText primary={post.title} secondary={(new Date(post.timestamp)).toDateString()} />
                    </ListItem>)
                )
                : (<Typography type="title">
                    Sorry there is no post for this category. Do you want to be the first to add a post?
                    </Typography>
                )
            }
        </List>
    </div>

Category.protoTypes = {
    posts: types.posts.isRequired,
    category: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
}

export default withStyles(styles)(Category)
