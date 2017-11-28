import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { editPost } from '../actions'
import PostEditor from '../components/PostEditor'
import * as types from '../utils/PropTypes'

class EditPostPage extends Component {
    static propTypes = {
        editPost: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        post: types.post.isRequired
    }

    handleSubmit = event => {
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
            <PostEditor handleSubmit={this.handleSubmit} post={this.props.post} />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    post: state.entities.posts[ownProps.match.params.id],
})

export default connect(mapStateToProps, { editPost })(EditPostPage)
