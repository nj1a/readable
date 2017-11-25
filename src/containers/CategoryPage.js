import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadCategories, loadPostsOfCategory } from '../actions/index'
import Category from '../components/Category'

class CategoryPage extends Component {
    static propTypes = {
        loadCategories: PropTypes.func.isRequired,
        loadPostsOfCategory: PropTypes.func.isRequired,
        categories: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                path: PropTypes.string.isRequired
            })
        ).isRequired,
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
        ).isRequired
    }

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
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    category: ownProps.match.params.category,
    categories: Object.values(state.entities.categories),
    posts: Object.values(state.entities.posts)
        .filter(post => post.category === ownProps.match.params.category)
        .sort((a, b) => b.voteScore - a.voteScore)
})

export default connect(mapStateToProps, {
    loadCategories,
    loadPostsOfCategory
})(CategoryPage)
