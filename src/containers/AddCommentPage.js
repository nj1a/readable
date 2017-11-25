import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { addComment } from '../actions';
import CommentEditor from '../components/CommentEditor';

class AddCommentPage extends Component {
    handleSubmit = (event) => {
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
            <CommentEditor handleSubmit={this.handleSubmit} parentId={this.props.match.params.parentId} />
        )
    }
}

export default connect(null, { addComment })(AddCommentPage);
