import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { LinearProgress } from 'material-ui/Progress'

import AppTopBar from '../components/AppTopBar'
import AppDrawer from '../components/AppDrawer'
import { loadCategories, loadPosts } from '../actions/index'

const styles = theme => ({
    root: {
        width: '100%',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    progressBar: {
        position: 'fixed',
        width: '100%',
        // z-index of 1400 is required to show the progress bar over the Drawer and the AppBar
        zIndex: 1400,
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
})

class AppFrame extends Component {
    state = {
        DrawerOpened: false,
        categoryOpened: true,
    }

    handleDrawerToggle = () => {
        this.setState({ DrawerOpened: !this.state.DrawerOpened });
    }

    handleNestedCategoryToggle = () => {
        this.setState({ categoryOpened: !this.state.categoryOpened });
    }

    componentDidMount() {
        this.props.loadCategories()
        this.props.loadPosts()
    }

    render() {
        const { classes, children } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <div className={classes.progressBar} >
                        <LinearProgress color="accent" />
                    </div>
                    <AppTopBar handleDrawerToggle={this.handleDrawerToggle} />
                    <AppDrawer DrawerOpened={this.state.DrawerOpened} categoryOpened={this.state.categoryOpened}
                        handleDrawerToggle={this.handleDrawerToggle} handleNestedCategoryToggle={this.handleNestedCategoryToggle} />
                    <main className={classes.content}>
                        {children}
                    </main>    
                </div>
            </div>    
        )
    }
}

AppFrame.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
        appFrame: PropTypes.string.isRequired,
        progressBar: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    loadPosts: PropTypes.func.isRequired,
    loadCategories: PropTypes.func.isRequired,
}

export default withStyles(styles)(connect(null, {
    loadPosts,
    loadCategories
})(AppFrame))
