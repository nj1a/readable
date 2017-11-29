import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Tooltip from 'material-ui/Tooltip'
// import { LinearProgress } from 'material-ui/Progress'
import AddIcon from 'material-ui-icons/Add'

import { loadCategories, loadPosts } from '../actions/index'
import * as types from '../utils/PropTypes'

const drawerWidth = 240
const styles = theme => ({
    appBar: {
        position: 'absolute',
        width: `calc(100% - ${drawerWidth}px)`,
    },
    flex: {
        flex: 1
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    // progressBar: {
    //     width: '100%',
    //     position: 'fixed',
    // },
})

class AppFrame extends Component {
    componentDidMount() {
        this.props.loadCategories()
        this.props.loadPosts()
    }
    render() {
        const { classes, categories } = this.props
        return (
            <div>
                {/* <div className={classes.progressBar} >
                    <LinearProgress color="accent" />
                </div> */}
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Typography type="button" color="inherit" className={classes.flex}>Title</Typography>
                        <Tooltip title="Add a post">
                            <Button component={Link} to='/posts/add' color="contrast">
                                <AddIcon className={classes.rightIcon}/>
                            </Button>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
                <Drawer type="permanent" classes={{ paper: classes.drawerPaper, }} anchor="left">
                    <Toolbar>
                        <Tooltip title="Back to Index Page">
                            <Button component={Link} to='/' color="primary">Readable</Button>
                        </Tooltip>    
                    </Toolbar>
                    <Divider />
                    <List>
                        <ListItem divider>Categories</ListItem>
                        {categories.map(category =>
                            <ListItem button component={Link} key={category.name} to={`/categories/${category.path}/posts`}>
                                <ListItemText primary={category.name} />
                            </ListItem>)}
                    </List>
                </Drawer>
            </div>
        )
    }
}

AppFrame.propTypes = {
    classes: PropTypes.shape({
        appBar: PropTypes.string.isRequired,
        flex: PropTypes.string.isRequired,
        drawerPaper: PropTypes.string.isRequired,
    }).isRequired,
    categories: types.categories.isRequired,
}

const mapStateToProps = state => ({
    categories: Object.values(state.entities.categories),
})

export default withStyles(styles)(connect(mapStateToProps, {
    loadPosts,
    loadCategories
})(AppFrame))
