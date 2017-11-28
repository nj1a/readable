import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'

import { addComment } from '../actions'
import CommentEditor from '../components/CommentEditor'

class AddCommentPage extends Component {
    static propTypes = {
        addComment: PropTypes.func.isRequired,
        postTitle: PropTypes.string.isRequired,
    }

    handleSubmit = event => {
        event.preventDefault()

        // FormData's instancem method entries() returns an iterator, and it
        // needs to be converted to a plain object to be consumed by addComment().
        // The first step is to convert an iterator to a [[Key, Vlaue]] array,
        // and the second step is to convert this array to a {Key: Value} object.
        const data = new FormData(event.target)
        const dataArray = [...data.entries(), ['id', uuidv4()], ['timestamp', Date.now()], ['parentId', this.props.match.params.parentId]]
        const dataObject = Object.assign(...dataArray.map(d => ({ [d[0]]: d[1] })))
        this.props.addComment(dataObject)
    }

    render() {
        return (
            <CommentEditor handleSubmit={this.handleSubmit} postTitle={this.props.postTitle} />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    comment: state.entities.comments[ownProps.match.params.id],
    postTitle: state.entities.posts[ownProps.match.params.parentId].title,
})

export default connect(mapStateToProps, { addComment })(AddCommentPage)
