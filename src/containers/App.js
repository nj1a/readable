import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Category from '../components/Category'

class App extends Component {
    static propTypes = {
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

