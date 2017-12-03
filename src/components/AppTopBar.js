import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Tooltip from 'material-ui/Tooltip'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import MenuIcon from 'material-ui-icons/Menu'

// this width should be the same as the one in AppDrawer
const drawerWidth = 240
const styles = theme => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    drawerMobileIcon: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    middleBuffer: {
        flex: '1 1 auto',
    },
})

const AppTopBar = ({ classes, handleDrawerToggle }) => (
    <AppBar className={classes.appBar}>
        <Toolbar>
            <IconButton color="contrast" onClick={handleDrawerToggle} className={classes.drawerMobileIcon}>
                <MenuIcon />
            </IconButton>
            <Typography type="button" color="inherit">Title</Typography>
            <div className={classes.middleBuffer} />
            <Tooltip title="Add a post">
                <Button component={Link} to='/posts/add' color="contrast">
                    <AddIcon />
                </Button>
            </Tooltip>
        </Toolbar>
    </AppBar>
)

AppTopBar.propTypes = {
    classes: PropTypes.shape({
        appBar: PropTypes.string.isRequired,
        drawerMobileIcon: PropTypes.string.isRequired,
        middleBuffer: PropTypes.string.isRequired,
    }).isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
}

export default withStyles(styles)(AppTopBar)
