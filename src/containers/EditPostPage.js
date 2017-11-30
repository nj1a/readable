import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

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

    state = {
        startRedirect: false,
    }

    handleSubmit = async event => {
        event.preventDefault()

        const data = new FormData(event.target)
        await this.props.editPost({
            id: this.props.id,
            title: data.get('title'),
            body: data.get('body')
        })
        this.setState({ startRedirect: true })
    }

    render() {
        const { categories, post } = this.props 
        return (
            <div>
                <PostEditor handleSubmit={this.handleSubmit} categories={categories} post={post} />
                {this.state.startRedirect && <Redirect to={`/posts/${post.id}`} />}
            </div>    
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    categories: Object.values(state.entities.categories),
    post: state.entities.posts[ownProps.match.params.id],
})

export default connect(mapStateToProps, { editPost })(EditPostPage)
