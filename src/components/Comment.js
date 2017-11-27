import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui-next/Button'

const Comment = ({ loadingLabel, comment, handleVote}) =>
    <div>
        <h4>Author: {comment.author}</h4>
        <h4>Rating: {comment.voteScore}</h4>
        <Button raised color="primary" onClick={handleVote('upVote')}>Upvote</Button>
        <Button raised color="primary" onClick={handleVote('downVote')}>Downvote</Button>
        <h4>Time created: {(new Date(comment.timestamp)).toDateString()}</h4>
        <h3>{comment.body}</h3>
    </div>

Comment.protoTypes = {
    loadingLabel: PropTypes.string.isRequired,
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        voteScore: PropTypes.number.isRequired
    }).isRequired,
}

export default Comment