import React from 'react';
import PropTypes from 'prop-types';

const Editor = ({ handleSubmit, post }) =>
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
            <button>Go!</button>
        </form>    
    </div>


Editor.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    post: PropTypes.object
}

export default Editor;
