import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Editor extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <p>Add a Post:</p>
                <form onSubmit={this.props.handleSubmit}>
                    <label htmlFor="title">Ttile: </label>
                    <input id="title" name="title" /><br />
                    <label htmlFor="author">Author: </label>
                    <input id="author" name="author" /><br />
                    <label htmlFor="body">Body: </label>
                    <input id="body" name="body" /><br />
                    <label htmlFor="category">Category: </label>
                    <input id="category" name="category" /><br />
                    <button>Go!</button>
                </form>    
            </div>
        )
    }
}
