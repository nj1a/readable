import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadCategories, loadPostsOfCategory } from '../actions/index';
import Category from '../components/Category';

class CategoryPage extends Component {
    static propTypes = {
        categories: PropTypes.object.isRequired,
        loadCategories: PropTypes.func.isRequired,
        loadPostsOfCategory: PropTypes.func.isRequired,
        posts: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.loadCategories()
        this.props.loadPostsOfCategory(this.props.category)
    }

    render() {
        const props = {
            title: this.props.category,
            categories: this.props.categories,
            posts: this.props.posts,
            category: this.props.category,
            loadiingLabel: "Loading..."
        }
        return (
            <Category {...props} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    category: ownProps.match.params.category,
    categories: state.entities.categories,
    posts: Object.values(state.entities.posts).filter(post => post.category === ownProps.match.params.category)
});

export default connect(mapStateToProps, {
    loadCategories,
    loadPostsOfCategory
})(CategoryPage);
