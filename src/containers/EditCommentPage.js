import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { editComment } from '../actions'
import CommentEditor from '../components/CommentEditor'
import * as types from '../utils/PropTypes'

class EditCommentPage extends Component {
    static propTypes = {
        editComment: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        comment: types.comment.isRequired,
        postTitle: PropTypes.string.isRequired,
    }

    state = {
        startRedirect: false,
    }

    handleSubmit = async event => {
        event.preventDefault()

        const data = new FormData(event.target)
        await this.props.editComment({
            id: this.props.id,
            body: data.get('body')
        })
        this.setState({ startRedirect: true })
    }

    render() {
        const { comment, postTitle } = this.props
        return (
            <div>
                <CommentEditor handleSubmit={this.handleSubmit} comment={comment}
                    postTitle={postTitle} />
                {this.state.startRedirect && <Redirect to={`/posts/${comment.parentId}`} />}
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
        postTitle: state.entities.posts[comment.parentId].title,
    }
}

export default connect(mapStateToProps, { editComment })(EditCommentPage)
