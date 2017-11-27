import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import MenuIcon from 'material-ui-icons/Menu'

const styles = theme => ({
    root: {
        width: '100%'
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
})

const TopAppBar = ({ classes }) => (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Button component={Link} to='/' color="contrast">Index</Button>
                <Typography type="title" color="inherit" className={classes.flex}>Readable</Typography>
                <Button component={Link} to='/posts/add' color="contrast">Add Post</Button>
            </Toolbar>
        </AppBar>
    </div>
)

TopAppBar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopAppBar)
