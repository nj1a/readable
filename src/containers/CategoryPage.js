import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadPostsOfCategory } from '../actions/index'
import Category from '../components/Category'
import * as types from '../utils/PropTypes'

class CategoryPage extends Component {
    static propTypes = {
        loadPostsOfCategory: PropTypes.func.isRequired,
        posts: types.posts.isRequired
    }

    componentDidMount() {
        this.props.loadPostsOfCategory(this.props.category)
    }

    render() {
        const props = {
            title: this.props.category,
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
    posts: Object.values(state.entities.posts)
        .filter(post => post.category === ownProps.match.params.category)
        .sort((a, b) => b.voteScore - a.voteScore)
})

export default connect(mapStateToProps, {
    loadPostsOfCategory
})(CategoryPage)
