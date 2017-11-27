import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'

const Category = ({ title, loadingLabel, posts, category }) => 
    <div>
        <h1>{title} Posts</h1>
        <div>
            <ul>
                {posts.map(post =>
                    <Button component={Link} key={post.id} to={`/posts/${post.id}`}>{post.title}</Button>)}
            </ul>
        </div>
    </div>

Category.protoTypes = {
    title: PropTypes.string.isRequired,
    loadingLabel: PropTypes.string.isRequired,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            timestamp: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            voteScore: PropTypes.number.isRequired,
            commentCount: PropTypes.number.isRequired
        })
    ).isRequired,
    category: PropTypes.string
}

export default Category
