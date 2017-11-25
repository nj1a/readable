import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { deleteComment } from '../actions'

class DeletePostPage extends Component {
    static propTypes = {
        deleteComment: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.deleteComment(this.props.match.params.id)
    }

    render() {
        return null
    }
}

export default connect(null, { deleteComment })(DeletePostPage)
