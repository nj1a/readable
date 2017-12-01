import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { editComment } from '../actions'
import CommentEditor from '../components/CommentEditor'
import * as types from '../utils/PropTypes'

class EditCommentPage extends Component {
    static propTypes = {
        editComment: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        comment: types.comment.isRequired,
        post: types.post.isRequired,
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { editComment, post, history } = this.props
        const data = new FormData(event.target)
        await editComment({
            id: this.props.id,
            body: data.get('body')
        })
        history.replace(`/${post.category}/${post.id}`)
    }

    render() {
        const { comment, post } = this.props
        return (
            <div>
                <CommentEditor handleSubmit={this.handleSubmit} comment={comment}
                    postTitle={post.title} />
            </div>    
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const comment = state.entities.comments[id]
    return {
        id,
        comment,
        post: state.entities.posts[comment.parentId],
    }
}

export default withRouter(connect(mapStateToProps, { editComment })(EditCommentPage))
