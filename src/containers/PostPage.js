import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadPost } from '../actions/index';
import Post from '../components/Post';

class PostPage extends Component {
    static propTypes = {
        loadPost: PropTypes.func.isRequired,
        posts: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.loadPost(this.props.id)
    }

    render() {
        const props = {
            post: this.props.posts[this.props.id],
            loadiingLabel: "Loading..."
        }
        return props.post ? <Post {...props} /> : null;
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    posts: state.entities.posts,
    comments: state.entities.comments
});

export default connect(mapStateToProps, {
    loadPost
})(PostPage);