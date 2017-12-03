import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import uuidv4 from 'uuid/v4'

import { addPost } from '../actions'
import PostEditor from '../components/PostEditor'
import * as types from '../utils/PropTypes'

class AddPostPage extends Component {
    static propTypes = {
        addPost: PropTypes.func.isRequired,
        categories: types.categories.isRequired,
    }

    state = {
        category: this.props.categories[0].name
    }

    handleCategoryChange = event => {
        this.setState({ category: event.target.value })
    }

    handleSubmit = async event => {
        event.preventDefault()

        // FormData's instancem method entries() returns an iterator, and it
        // needs to be converted to a plain object to be consumed by addPost().
        // The first step is to convert an iterator to a [[Key, Vlaue]] array,
        // and the second step is to convert this array to a {Key: Value} object.
        const { addPost, history } = this.props
        const data = new FormData(event.target)
        const dataArray = [...data.entries(), ['id', uuidv4()], ['timestamp', Date.now()]]
        const dataObject = Object.assign(...dataArray.map(d => ({ [d[0]]: d[1] })))
        await addPost(dataObject)
        history.replace('/')
    }

    render() {
        return (
            <PostEditor handleSubmit={this.handleSubmit} categories={this.props.categories}
                category={this.state.category} handleCategoryChange={this.handleCategoryChange} />
        )
    }
}

const mapStateToProps = ({ entities: { categories }}) => ({
    categories: Object.values(categories),
})

export default withRouter(connect(mapStateToProps, { addPost })(AddPostPage))
