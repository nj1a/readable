import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { editPost } from '../actions'
import PostEditor from '../components/PostEditor'
import * as types from '../utils/PropTypes'

class EditPostPage extends Component {
    static propTypes = {
        editPost: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        categories: types.categories.isRequired,
        post: types.post.isRequired,
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { editPost, history, post, id } = this.props
        const data = new FormData(event.target)
        await editPost({
            id,
            title: data.get('title'),
            body: data.get('body')
        })
        history.replace(`/${post.category}/${post.id}`)
    }

    render() {
        const { categories, post } = this.props 
        return (
            <div>
                <PostEditor handleSubmit={this.handleSubmit} categories={categories} post={post} />
            </div>    
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    categories: Object.values(state.entities.categories),
    post: state.entities.posts[ownProps.match.params.id],
})

export default withRouter(connect(mapStateToProps, { editPost })(EditPostPage))
