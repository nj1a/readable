import React, { Component } from 'react'
import { connect } from 'react-redux'

import Category from '../components/Category'
import * as types from '../utils/PropTypes'

class App extends Component {
    static propTypes = {
        posts: types.posts.isRequired
    }

    render() {
        const props = {
            title: "All",
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
    posts: Object.values(state.entities.posts)
})

export default connect(mapStateToProps)(App)

