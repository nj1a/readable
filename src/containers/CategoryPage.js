import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadPostsOfCategory } from '../actions/index'
import Category from '../components/Category'

class CategoryPage extends Component {
    static propTypes = {
        loadPostsOfCategory: PropTypes.func.isRequired,
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
