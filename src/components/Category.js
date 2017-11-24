import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

const Category = ({ title, categories, loadingLabel, posts, category }) => 
    <div>
        <h1>{title}</h1>
        <div>
            <h3>All categories</h3>
            {isEmpty(categories)
                ? <h2><i>{loadingLabel}</i></h2>
                : (Object.values(categories).map(category =>
                    <Link key={category.name} to={`/${category.path}/posts`}>{category.name}</Link>
                ))}
            <h3>All Posts</h3>
            <ul>
                {Object.values(posts)
                    .sort((a, b) => b.voteScore - a.voteScore)
                    .map(post => <Link key={post.id} to={`/posts/${post.id}`}>{post.title}</Link>)}
            </ul>
        </div>
    </div>


Category.protoTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.object.isRequired,
    loadingLabel: PropTypes.string.isRequired,
    posts: PropTypes.object.isRequired,
    category: PropTypes.string
}

export default Category;
