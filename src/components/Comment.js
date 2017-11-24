import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ loadingLabel, comment }) =>
    <div>
        <h3>Author: {comment.author}</h3>
        <h3>Rating: {comment.voteScore}</h3>
        <h3>Time created: {(new Date(comment.timestamp)).toDateString()}</h3>
        <h2>{comment.body}</h2>
    </div>


Comment.protoTypes = {
    loadingLabel: PropTypes.string.isRequired,
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        voteScore: PropTypes.number.isRequired,
    }).isRequired,
}

export default Comment;