import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ loadingLabel, post }) =>
    <div>
        <h3>{post.title}</h3>
        <h4>Author: {post.author}</h4>
        <h4>Category: {post.category}</h4>
        <h4>Rating: {post.voteScore}</h4>
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
    }).isRequired,
}

export default Post;
