import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

import { deleteComment } from '../actions'

class DeletePostPage extends Component {
    static propTypes = {
        deleteComment: PropTypes.func.isRequired
    }

    state = {
        startRedirect: false,
    }

    async componentDidMount() {
        this.props.deleteComment(this.props.match.params.id)
        this.setState({ startRedirect: true })
    }

    render() {
        return (
            <div>
                {this.state.startRedirect && < Redirect to='/' />}
            </div> 
        )
    }
}

export default connect(null, { deleteComment })(DeletePostPage)
