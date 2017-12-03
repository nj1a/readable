import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Tooltip from 'material-ui/Tooltip'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Menu, { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'
import Badge from 'material-ui/Badge'
import withStyles from 'material-ui/styles/withStyles'
import upperFirst from 'lodash/upperFirst'
import KeyboardArrowUp from 'material-ui-icons/KeyboardArrowUp'
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown'
import ModeEdit from 'material-ui-icons/ModeEdit'
import Delete from 'material-ui-icons/Delete'

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

const Category = ({ posts, category, classes, sortOpened, anchorEl, handleClick, handleRequestClose, handleVote, handleDeletePost }) => 
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
                    <div key={post.id}>
                        <ListItem button component={Link} to={`/${post.category}/${post.id}`} className={classes.listItem} >
                            <Badge badgeContent={post.commentCount} color="accent">
                                <Tooltip title={`Score ${post.voteScore}`}>
                                    {/* somehow Avatar doesn't show number 0 */}
                                    <Avatar>{post.voteScore || '0'}</Avatar>
                                </Tooltip>
                            </Badge>
                            <ListItemText primary={post.title} secondary={`@${post.author} | ${(new Date(post.timestamp)).toDateString()}`} />
                        </ListItem>
                        <Button dense color="primary" onClick={handleVote(post.id, 'upVote')}><KeyboardArrowUp /></Button>
                        <Button dense color="accent" onClick={handleVote(post.id, 'downVote')}><KeyboardArrowDown /></Button>
                        <Tooltip title="Edit post">
                            <Button component={Link} to={`/posts/${post.id}/edit`}><ModeEdit /></Button>
                        </Tooltip>
                        <Tooltip title="Delete post">
                            <Button color="accent" onClick={handleDeletePost(post)}><Delete /></Button>
                        </Tooltip>
                    </div>    
                )
                )
                : (<Typography type="title">
                        There is no post for this category. Do you want to be the first to add a post?
                    </Typography>
                )
            }
        </List>
    </div>

Category.propTypes = {
    posts: types.posts.isRequired,
    category: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    sortOpened: PropTypes.bool.isRequired,
    anchorEl: PropTypes.object,
    handleClick: PropTypes.func.isRequired,
    handleRequestClose: PropTypes.func.isRequired,
    handleVote: PropTypes.func.isRequired,
    handleDeletePost: PropTypes.func.isRequired,
}

export default withStyles(styles)(Category)
