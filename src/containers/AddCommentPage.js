import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import { Redirect } from 'react-router'

import { addComment } from '../actions'
import CommentEditor from '../components/CommentEditor'
import * as types from '../utils/PropTypes'

class AddCommentPage extends Component {
    static propTypes = {
        addComment: PropTypes.func.isRequired,
        post: types.post.isRequired,
    }

    state = {
        startRedirect: false,
    }

    handleSubmit = async event => {
        event.preventDefault()

        // FormData's instancem method entries() returns an iterator, and it
        // needs to be converted to a plain object to be consumed by addComment().
        // The first step is to convert an iterator to a [[Key, Vlaue]] array,
        // and the second step is to convert this array to a {Key: Value} object.
        const data = new FormData(event.target)
        const dataArray = [...data.entries(), ['id', uuidv4()], ['timestamp', Date.now()], ['parentId', this.props.match.params.parentId]]
        const dataObject = Object.assign(...dataArray.map(d => ({ [d[0]]: d[1] })))
        await this.props.addComment(dataObject)
        this.setState({ startRedirect: true })
    }

    render() {
        const { post } = this.props
        return (
            <div>
                <CommentEditor handleSubmit={this.handleSubmit} postTitle={post.title} />
                { this.state.startRedirect && <Redirect to={`/posts/${post.id}`} /> }
            </div > 
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: state.entities.posts[ownProps.match.params.parentId],
})

export default connect(mapStateToProps, { addComment })(AddCommentPage)
