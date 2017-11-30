import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

import { deletePost } from '../actions'

class DeletePostPage extends Component {
    static propTypes = {
        deletePost: PropTypes.func.isRequired
    }

    state = {
        startRedirect: false,
    }

    async componentDidMount() {
        await this.props.deletePost(this.props.match.params.id)
        this.setState({ startRedirect: true })
    }

    render() {
        return (
            <div>
                {this.state.startRedirect &&  < Redirect to='/' />}
            </div>    
        )  
    }
}

export default connect(null, { deletePost })(DeletePostPage)
