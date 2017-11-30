import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadPostsOfCategory } from '../actions/index'
import Category from '../components/Category'
import * as types from '../utils/PropTypes'

class App extends Component {
    static propTypes = {
        loadPostsOfCategory: PropTypes.func.isRequired,
        posts: types.posts.isRequired
    }

    componentDidMount() {
        this.props.loadPostsOfCategory(this.props.category)
    }

    render() {
        return (
            <Category posts={this.props.posts} category={this.props.category} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const isHome = ownProps.match.path === '/'
    const category = isHome ? "all" : ownProps.match.params.category
    const posts = isHome
        ? Object.values(state.entities.posts)
        : Object.values(state.entities.posts).filter(post => post.category === category)
    return {
        category,
        posts: posts.sort((a, b) => b.voteScore - a.voteScore)
    }
}

export default connect(mapStateToProps, {
    loadPostsOfCategory
})(App)
