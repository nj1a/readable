import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { deletePost } from '../actions'

class DeletePostPage extends Component {
    static propTypes = {
        deletePost: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.deletePost(this.props.match.params.id)
    }

    render() {
        return null
    }
}

export default connect(null, { deletePost })(DeletePostPage)
