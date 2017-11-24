import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { addPost } from '../actions';
import Editor from '../components/Editor';

class AddPage extends Component {
    handleSubmit = (event) => {
        event.preventDefault()

        // FormData's instancem method entries() returns an iterator, and it
        // needs to be converted to a plain object to be consumed by addPost().
        // The first step is to convert an iterator to a [[Key, Vlaue]] array,
        // and the second step is to convert this array to a {Key: Value} object.
        const data = new FormData(event.target)
        const dataArray = [...data.entries(), ['id', uuidv4()], ['timestamp', Date.now()]]
        const dataObject = Object.assign(...dataArray.map(d => ({ [d[0]]: d[1] })))
        this.props.addPost(dataObject)
    }

    render() {
        return (
            <Editor handleSubmit={this.handleSubmit} />
        )
    }
}

export default connect(null, { addPost })(AddPage);
