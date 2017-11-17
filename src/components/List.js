import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty'; 

export default class List extends Component {
    static propTypes = {
        loadingLabel: PropTypes.string.isRequired,
        // isFetching: PropTypes.bool.isRequired,
        categories: PropTypes.object.isRequired
    };

    static defaultProps = {
        // isFetching: true,
        loadingLabel: 'Loading...'
    };

    render() {
        const { categories, loadingLabel } = this.props;
        if (isEmpty(categories)) {
            return <h2><i>{loadingLabel}</i></h2>
        }
        return (Object.keys(categories).map(name =>
            <li key={name}>
                {name}
            </li>
        ))
    }
}