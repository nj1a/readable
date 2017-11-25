import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'

const Category = ({ title, categories, loadingLabel, posts, category }) => 
    <div>
        <h1>{title}</h1>
        <div>
            <h3>All categories</h3>
            {isEmpty(categories)
                ? <h2><i>{loadingLabel}</i></h2>
                : categories.map(category =>
                    <Link key={category.name} to={`/${category.path}/posts`}>{category.name}</Link>
                )}
            <h3>All Posts</h3>
            <ul>
                {posts.map(post =>
                    <Link key={post.id} to={`/posts/${post.id}`}>{post.title}</Link>)}
            </ul>
        </div>
    </div>

Category.protoTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.object.isRequired,
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
