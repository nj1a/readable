import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Categories extends React.Component {
    static propTypes = {
        categories: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <h1>Categories</h1>
                <div>
                    <ul>
                        {this.props.categories.map(category =>
                            <li key={category.name}>
                                {category.name}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories
});

export default connect(mapStateToProps)(Categories);
