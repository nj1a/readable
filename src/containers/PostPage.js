import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadPost, loadCommentsOfPost } from '../actions/index';
import Post from '../components/Post';
import Comment from '../components/Comment';


class PostPage extends Component {
    static propTypes = {
        loadPost: PropTypes.func.isRequired,
        loadCommentsOfPost: PropTypes.func.isRequired,
        post: PropTypes.PropTypes.shape({
            id: PropTypes.string.isRequired,
            timestamp: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            voteScore: PropTypes.number.isRequired,
        }).isRequired,
        id: PropTypes.string.isRequired,
        comments: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.loadPost(this.props.id)
        this.props.loadCommentsOfPost(this.props.id)
    }

    render() {
        const { id, comments, post } = this.props;
        const postProps = {
            post,
            loadingLabel: "Loading..."
        }
        
        return (
            <div>
                {postProps.post && <Post {...postProps} />}
                <Link to={`/posts/${id}/edit`}>Edit Post</Link>
                <Link to={`/posts/${id}/delete`}>Delete Post</Link>
                <Link to={`/posts/${id}/comments/add`}>Add Comment</Link>
                <h2>Comments</h2>
                {comments.map(comment => (
                    <div key={comment.id}>
                        <Comment comment={comment} loadingLabel='Loading...' />
                        <Link to={`/comments/${comment.id}/edit`}>Edit Comment</Link>
                        <Link to={`/comments/${comment.id}/delete`}>Delete Comment</Link>
                    </div>
                ))}
            </div>    
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    post: state.entities.posts[ownProps.match.params.id],
    comments: Object.values(state.entities.comments)
        .filter(comment => comment.parentId === ownProps.match.params.id)
        .sort((a, b) => b.voteScore - a.voteScore)
});

export default connect(mapStateToProps, {
    loadPost,
    loadCommentsOfPost
})(PostPage);