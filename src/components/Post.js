import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ loadingLabel, post, handleVote }) =>
    <div>
        <h3>{post.title}</h3>
        <h4>Rating: {post.voteScore}</h4>
        <button onClick={handleVote('upVote')}>Upvote</button>
        <button onClick={handleVote('downVote')}>Downvote</button>
        <h4>Author: {post.author}</h4>
        <h4>Category: {post.category}</h4>
        <h4># of Comments: {post.commentCount}</h4>
        <h4>Time created: {(new Date(post.timestamp)).toDateString()}</h4>
        <h3>{post.body}</h3>
    </div>

Post.protoTypes = {
    loadingLabel: PropTypes.string.isRequired,
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        voteScore: PropTypes.number.isRequired,
        commentCount: PropTypes.number.isRequired
    }).isRequired,
}

export default Post
