import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import * as types from '../utils/PropTypes'

const CommentEditor = ({ handleSubmit, comment, postTitle }) =>
    <div>
        <p>{comment ? 'Edit' : 'Add'} a Comment:</p>
        <form onSubmit={handleSubmit} autoComplete="off">
            <TextField id="postTitle" name="postTitle" label="Post Title" margin="normal"
                defaultValue={postTitle} fullWidth disabled />
            <TextField id="author" name="author" label="Author" margin="normal"
                defaultValue={comment && comment.author} required={!comment} fullWidth disabled={!!comment} />
            <TextField id="body" name="body" label="Body" margin="normal"
                defaultValue={comment && comment.body} required fullWidth multiline />
            <Button raised color="primary" type="submit">{comment ? 'Edit' : 'Add'}</Button>
        </form>
    </div>


CommentEditor.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    comment: types.comment,
    postTitle: PropTypes.string.isRequired,
}

export default CommentEditor
