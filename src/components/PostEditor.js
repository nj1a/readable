import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui-next/Button'

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
    post: PropTypes.PropTypes.shape({
        id: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        voteScore: PropTypes.number.isRequired,
        commentCount: PropTypes.number.isRequired
    })
}

export default PostEditor
