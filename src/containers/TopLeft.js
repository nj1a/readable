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

import { loadCategories, loadPosts } from '../actions/index'

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
})

class TopLeft extends Component {
    componentDidMount() {
        this.props.loadCategories()
        this.props.loadPosts()
    }
    render() {
        const { classes, categories } = this.props
        return (
            <div>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Typography type="button" color="inherit" className={classes.flex}>Title</Typography>
                        <Button component={Link} to='/posts/add' color="contrast">Add Post</Button>
                    </Toolbar>
                </AppBar>
                <Drawer type="permanent" classes={{ paper: classes.drawerPaper, }} anchor="left">
                    <Toolbar>
                        <Button component={Link} to='/' color="primary">Readable</Button>
                    </Toolbar>
                    <Divider />
                    <List>
                        {categories.map(category =>
                            < ListItem button component={Link} key={category.name} to={`/categories/${category.path}/posts`}>
                                <ListItemText primary={category.name} />
                            </ListItem>)}
                    </List>
                </Drawer>
            </div>
        )
    }
}

TopLeft.propTypes = {
    classes: PropTypes.shape({
        appBar: PropTypes.string.isRequired,
        flex: PropTypes.string.isRequired,
        drawerPaper: PropTypes.string.isRequired,
    }).isRequired,
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const mapStateToProps = state => ({
    categories: Object.values(state.entities.categories),
})

export default withStyles(styles)(connect(mapStateToProps, {
    loadPosts,
    loadCategories
})(TopLeft))
