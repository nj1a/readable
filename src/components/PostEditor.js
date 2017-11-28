import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

import * as types from '../utils/PropTypes'

const PostEditor = ({ handleSubmit, post }) =>
    <div>
        <p>{post ? 'Edit' : 'Add'} a Post:</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Ttile: </label>
            <input id="title" name="title" defaultValue={post && post.title}/><br />
            <label htmlFor="author">Author: </label>
            <input id="author" name="author" disabled={post} value={post && post.author} /><br />
            <label htmlFor="category">Category: </label>
            <input id="category" name="category" disabled={post} value={post && post.category} /><br />
            <label htmlFor="body">Body: </label>
            <input id="body" name="body" defaultValue={post && post.body} /><br />
            <Button raised color="primary">{post ? 'Edit' : 'Add'}</Button>
        </form>    
    </div>


PostEditor.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    post: types.post,
}

export default PostEditor
