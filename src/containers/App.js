import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { votePost, deletePost } from '../actions/index'
import Category from '../components/Category'
import * as types from '../utils/PropTypes'

class App extends Component {
    static propTypes = {
        posts: types.posts.isRequired,
        votePost: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired,
    }

    state = {
        anchorEl: null,
        sortOpened: false,
        sortBy: 'voteScore',
    }

    handleClick = ({ currentTarget }) => {
        this.setState({ sortOpened: true, anchorEl: currentTarget });
    }

    handleRequestClose = sortBy => () => {
        this.setState({ sortOpened: false });
        if (sortBy) {
            this.setState({ sortBy })
        }
    }

    handleVote = (id, option) => () => {
        this.props.votePost({ id, option })
    }

    handleDeletePost = post => () => {
        this.props.deletePost(post.id)
    }

    render() {
        const { sortOpened, anchorEl, sortBy } = this.state
        return (
            <Category posts={this.props.posts.sort((a, b) => b[sortBy] - a[sortBy])}
                category={this.props.category} sortOpened={sortOpened} anchorEl={anchorEl}
                handleClick={this.handleClick} handleRequestClose={this.handleRequestClose}
                handleVote={this.handleVote} handleDeletePost={this.handleDeletePost} />
        )
    }
}

const mapStateToProps = ({ entities }, { match }) => {
    const isHome = match.path === '/'
    const category = isHome ? "all" : match.params.category
    const posts = Object.values(entities.posts).filter(post => !post.deleted)
    return {
        category,
        posts: isHome
            ? posts
            : posts.filter(post => post.category === category)
    }
}

export default connect(mapStateToProps, {
    votePost,
    deletePost
})(App)
