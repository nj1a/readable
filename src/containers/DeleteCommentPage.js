import { Component } from 'react';
import { connect } from 'react-redux';

import { deleteComment } from '../actions';

class DeletePostPage extends Component {
    componentDidMount() {
        this.props.deleteComment(this.props.match.params.id);
    }

    render() {
        return null;
    }
}

export default connect(null, { deleteComment })(DeletePostPage);
