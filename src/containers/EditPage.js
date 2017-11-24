import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { editPost } from '../actions'
import Editor from '../components/Editor';

class EditPage extends Component {
    static propTypes = {
        editPost: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        posts: PropTypes.object.isRequired
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.value !== this.props.value) {
    //         this.setInputValue(nextProps.value)
    //     }
    // }

    handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.target)
        this.props.editPost({
            id: this.props.id,
            title: data.get('title'),
            body: data.get('body')
        })
    }

    render() {
        return (
            <Editor handleSubmit={this.handleSubmit} post={this.props.posts[this.props.id]} />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    posts: state.entities.posts,
});

export default connect(mapStateToProps, { editPost })(EditPage);
