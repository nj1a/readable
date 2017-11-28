import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

import * as types from '../utils/PropTypes'

const CommentEditor = ({ handleSubmit, comment, parentId }) =>
    <div>
        <p>{comment ? 'Edit' : 'Add'} a Comment:</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="parent">Parent ID: </label>
            <input id="parent" name="parent" disabled defaultValue={parentId} /><br />
            <label htmlFor="author">Author: </label>
            <input id="author" name="author" disabled={comment} value={comment && comment.author} /><br />
            <label htmlFor="body">Body: </label>
            <input id="body" name="body" defaultValue={comment && comment.body} /><br />
            <Button raised color="primary">{comment ? 'Edit' : 'Add'}</Button>
        </form>
    </div>


CommentEditor.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    comment: types.comment,
    parentId: PropTypes.string.isRequired
}

export default CommentEditor
