import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadCategories } from '../actions/index';
import List from '../components/List';

class Categories extends Component {
    static propTypes = {
        categories: PropTypes.object.isRequired,
        loadCategories: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.loadCategories(['name'])
    }

    render() {
        return (
            <div>
                <h1>Categories</h1>
                <div>
                    <ul>
                        <List categories={this.props.categories} />
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    categories: state.entities.categories
});

export default connect(mapStateToProps, { loadCategories })(Categories);
