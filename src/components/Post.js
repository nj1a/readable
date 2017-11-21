import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ loadingLabel, post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <h3>Author: {post.author}</h3>
            <h3>Category: {post.category}</h3>
            <h3>Rating: {post.voteScore}</h3>
            <h3>Time created: {(new Date(post.timestamp)).toDateString()}</h3>
            <h2>{post.body}</h2>
        </div>
    )
};

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
