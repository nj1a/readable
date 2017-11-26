import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({ loadingLabel, comment, handleVote}) =>
    <div>
        <h4>Author: {comment.author}</h4>
        <h4>Rating: {comment.voteScore}</h4>
        <button onClick={handleVote('upVote')}>Upvote</button>
        <button onClick={handleVote('downVote')}>Downvote</button>
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