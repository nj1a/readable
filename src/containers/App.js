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

    state = {
        anchorEl: null,
        sortOpened: false,
        sortBy: 'voteScore',
    };

    handleClick = (event) => {
        this.setState({ sortOpened: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = sortBy => () => {
        this.setState({ sortOpened: false });
        if (sortBy) {
            this.setState({ sortBy })
        }
    };

    componentDidMount() {
        this.props.loadPostsOfCategory(this.props.category)
    }

    render() {
        const {sortOpened, anchorEl, sortBy } = this.state
        return (
            <Category posts={this.props.posts.sort((a, b) => b[sortBy] - a[sortBy])}
                category={this.props.category} sortOpened={sortOpened} anchorEl={anchorEl}
                handleClick={this.handleClick} handleRequestClose={this.handleRequestClose} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const isHome = ownProps.match.path === '/'
    const category = isHome ? "all" : ownProps.match.params.category
    return {
        category,
        posts: isHome
            ? Object.values(state.entities.posts)
            : Object.values(state.entities.posts).filter(post => post.category === category)
    }
}

export default connect(mapStateToProps, {
    loadPostsOfCategory
})(App)
