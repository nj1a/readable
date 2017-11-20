import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadPostsOfCategory } from '../actions/index';

class Category extends Component {
    static propTypes = {
        category: PropTypes.string.isRequired,
        posts: PropTypes.object.isRequired,
        loadPostsOfCategory: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.loadPostsOfCategory(this.props.category);
    }

    render() {
        const { category, posts } = this.props
        return (
            <div>
                <h1>{category}</h1> 
                <div>
                    <ul>
                        {Object.values(posts)
                            .filter(post => post.category === category)
                            .map(post => <h1 key={post.id}>{post.title}</h1>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    category: ownProps.match.params.category,
    posts: state.entities.posts
});

export default connect(mapStateToProps, { loadPostsOfCategory })(Category);
