import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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

    handleSubmit = event => {
        event.preventDefault()

        const data = new FormData(event.target)
        this.props.editComment({
            id: this.props.id,
            body: data.get('body')
        })
    }

    render() {
        return (
            <CommentEditor handleSubmit={this.handleSubmit} comment={this.props.comment}
                postTitle={this.props.postTitle} />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    comment: state.entities.comments[ownProps.match.params.id],
    postTitle: state.entities.posts[state.entities.comments[ownProps.match.params.id].parentId].title,
})

export default connect(mapStateToProps, { editComment })(EditCommentPage)
