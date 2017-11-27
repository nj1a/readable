import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui-next/Button'

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
    comment: PropTypes.PropTypes.shape({
        id: PropTypes.string.isRequired,
        parentId: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        voteScore: PropTypes.number.isRequired
    }),
    parentId: PropTypes.string.isRequired
}

export default CommentEditor
