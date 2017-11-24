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
        posts: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        comments: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.loadPost(this.props.id)
        this.props.loadCommentsOfPost(this.props.id)
    }

    render() {
        const postProps = {
            post: this.props.posts[this.props.id],
            loadingLabel: "Loading..."
        }
        return (
            <div>
                {postProps.post && <Post {...postProps} />}
                <Link to={`/posts/${this.props.id}/edit`}>Edit Post</Link>
                <h2>Comments</h2>
                {Object.values(this.props.comments)
                    .filter(comment => comment.parentId === this.props.id)
                    .map(comment => <Comment key={comment.id} comment={comment} loadingLabel='Loading...' />)}
            </div>    

        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    posts: state.entities.posts,
    comments: state.entities.comments
});

export default connect(mapStateToProps, {
    loadPost,
    loadCommentsOfPost
})(PostPage);