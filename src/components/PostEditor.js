import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import withStyles from 'material-ui/styles/withStyles'

import * as types from '../utils/PropTypes'

const styles = theme => ({
    div: {
        margin: 10,
        [theme.breakpoints.up('md')]: {
            maxWidth: 700,
            margin: '0 auto',
        },
    },
})

const PostEditor = ({ handleSubmit, categories, post, classes, category, handleCategoryChange }) => 
    <div className={classes.div}>
        <p>{post ? 'Edit' : 'Add'} a Post:</p>
        <form onSubmit={handleSubmit} autoComplete="off">
            <TextField id="title" name="title" label="Title" margin="normal"
                defaultValue={post && post.title} required fullWidth />    
            <TextField id="author" name="author" label="Author" margin="normal"
                defaultValue={post && post.author} required={!post} fullWidth disabled={!!post} />
            <TextField id="category" name="category" label="Category" margin="normal"
                value={post ? post.category : category} required={!post} fullWidth
                select disabled={!!post} onChange={handleCategoryChange}>
                {categories.map(category => (
                    <MenuItem key={category.name} value={category.name}>{category.name}</MenuItem>
                ))}    
            </TextField>
            <TextField id="body" name="body" label="Body" margin="normal"  
                defaultValue={post && post.body} required fullWidth multiline />
            {/* The button and the submit type in it are required for form onSubmit to work */}
            <Button raised color="primary" type="submit">{post ? 'Edit' : 'Add'}</Button>
        </form>    
    </div>


PostEditor.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    categories: types.categories.isRequired,
    post: types.post,
}

export default withStyles(styles)(PostEditor)
