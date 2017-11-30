import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import upperFirst from 'lodash/upperFirst'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Hidden from 'material-ui/Hidden'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import Tooltip from 'material-ui/Tooltip'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import StarBorder from 'material-ui-icons/StarBorder'

import * as types from '../utils/PropTypes'

// this width should be the same as the one in AppTopBar
const drawerWidth = 240
const styles = theme => ({
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    categoryList: {
        paddingLeft: theme.spacing.unit * 5,
        '&:focus': {
            background: theme.palette.primary[500],
            '& $text': {
                color: theme.palette.common.white,
            },
        },
    },
    text: {},
})

const AppDrawer = ({ categories, classes, handleDrawerToggle, handleNestedCategoryToggle, DrawerOpened, categoryOpened }) => {
    const drawer = (
        <div>
            <Toolbar>
                <Tooltip title="Back to Index Page">
                    <Button component={Link} to='/' color="primary" onClick={handleDrawerToggle}>Readable</Button>
                </Tooltip>
            </Toolbar>
            <Divider />
            <List>
                <ListItem button onClick={handleNestedCategoryToggle}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                    {categoryOpened ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse component="li" in={categoryOpened} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {categories.map(category =>
                            <ListItem button component={Link} key={category.name} onClick={handleDrawerToggle}
                                to={`/categories/${category.path}/posts`} className={classes.categoryList}>
                                <ListItemText primary={upperFirst(category.name)} classes={{ text: classes.text }}/>
                            </ListItem>)}
                    </List>
                </Collapse>
            </List>
        </div>
    )
    return (
        <div>
            <Hidden mdUp>
                <Drawer type="temporary" open={DrawerOpened}
                    classes={{ paper: classes.drawerPaper, }}
                    onRequestClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true, }}>
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden mdDown implementation="css">
                <Drawer type="permanent" classes={{ paper: classes.drawerPaper, }}>
                    {drawer}
                </Drawer>
            </Hidden>
        </div>
    )
}

AppDrawer.propTypes = {
    classes: PropTypes.shape({
        drawerPaper: PropTypes.string.isRequired,
        categoryList: PropTypes.string.isRequired,
    }).isRequired,
    categories: types.categories.isRequired,
}

const mapStateToProps = state => ({
    categories: Object.values(state.entities.categories),
})

export default withStyles(styles)(connect(mapStateToProps)(AppDrawer))
