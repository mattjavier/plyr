import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Link } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



const Navbar = () => {
  const classes = useStyles();

  const [openState, setOpen] = useState({
    open: false
  })

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setOpen({ ...openState, open })
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* For the hamburger icon drop down menu. Hidden on screens small and larger */}
          <Hidden smUp>
            {/* Makes icon function like a button */}
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)} >
              {/* Icon */}
              <MenuIcon />
            </IconButton>
            {/* Controls the drop down menu */}
            <Drawer
              anchor="top"
              open={openState.open}
              onClose={toggleDrawer(false)}
            >
              {/* links in the drop down menu */}
              <List>
                <ListItem>
                  <Link to="/matches">
                    <Button onClick={toggleDrawer(false)}>Matches</Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/profile">
                    <Button onClick={toggleDrawer(false)}>Profile</Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/">
                    <Button onClick={toggleDrawer(false)}>Log In</Button>
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
          {/* App name */}
          <Typography variant="h6" className={classes.title}>
            plyr
          </Typography>

          {/* Links on navbar that are visible from screens small and larger */}
          <Hidden xsDown>
            <Link to="/matches">
              <Button color="inherit">Matches</Button>
            </Link>
            <Link to="/profile">
              <Button color="inherit">Profile</Button>
            </Link>
            <Link to="/">
              <Button color="inherit">Log In</Button>
            </Link>
          </Hidden>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar

// App Bar with a primary