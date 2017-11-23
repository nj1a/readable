import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadCategories, loadPosts } from '../actions/index';
import Category from '../components/Category';

class App extends Component {
    static propTypes = {
        categories: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
        loadCategories: PropTypes.func.isRequired,
        loadPosts: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.loadCategories()
        this.props.loadPosts()
    }

    render() {
        const props = {
            title: "Readable",
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
    categories: state.entities.categories,
    posts: state.entities.posts,
    category: ownProps.match.params.category,
});

export default connect(mapStateToProps, {
    loadPosts,
    loadCategories
})(App);

