import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
        return isEmpty(categories)  
            ? <h2><i>{loadingLabel}</i></h2>
            : (Object.values(categories).map(category =>
                <Link key={category.name} to={`/${category.path}/posts`}>{category.name}</Link>
            ))
    }
}