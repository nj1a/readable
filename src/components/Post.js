import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import KeyboardArrowUp from 'material-ui-icons/KeyboardArrowUp'
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown'
import ModeEdit from 'material-ui-icons/ModeEdit'
import Delete from 'material-ui-icons/Delete'
import Comment from 'material-ui-icons/Comment'
import Badge from 'material-ui/Badge'

import * as types from '../utils/PropTypes'

const Post = ({ loadingLabel, post, handleVote }) =>
    <Card>
        <CardHeader avatar={<Badge badgeContent={post.commentCount} color="accent"><Avatar>{post.voteScore}</Avatar></Badge>}
            title={`${post.category}::${post.title}`} subheader={`@${post.author} | ${(new Date(post.timestamp)).toDateString()}`}>
        </CardHeader>
        <CardContent>
            <Typography type="body1">{post.body}</Typography>
        </CardContent>
        <CardActions>
            <Button dense color="primary" onClick={handleVote('upVote')}><KeyboardArrowUp /></Button>
            <Button dense color="accent" onClick={handleVote('downVote')}><KeyboardArrowDown /></Button>
            <Button component={Link} to={`/posts/${post.id}/edit`}><ModeEdit /></Button>
            <Button color="accent" component={Link} to={`/posts/${post.id}/delete`}><Delete /></Button>
            <Button color="primary" component={Link} to={`/posts/${post.id}/comments/add`}><Comment /></Button>
        </CardActions>
    </Card>

Post.protoTypes = {
    loadingLabel: PropTypes.string.isRequired,
    post: types.post.isRequired,
}

export default Post
