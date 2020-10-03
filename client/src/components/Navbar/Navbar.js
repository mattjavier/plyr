import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
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
import plyr2 from '../../assets/logo.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    letterSpacing: 3,
    marginLeft: 0
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    '&:hover': {
      color: '#414679'
    }
  },
  drawer: {
    backgroundColor: '#845bb3'
  },
  avatar: {
    boxShadow: theme.shadows[3],
    backgroundColor: '#263238',
    color: "#845bb3"
  },
  logo: {
    width: '66px',
    position: 'relative',
    top: 4
  }
}))




const Navbar = () => {
  const classes = useStyles()

  const [openState, setOpen] = useState({
    open: false
  })

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setOpen({ ...openState, open })
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location = '/'
  }

  const defaultAvatar = user => {
    console.log(user)
  }

  const [playerState, setPlayerState] = useState({
    playerExists: false,
    avatar: '',
    user: ''
  })

  // playerState.avatarCode = () => {
  //   //console.log(playerState.avatar)
  //   if (playerState.avatar.length === 1) {
  //     return (<Avatar class>{playerState.avatar}</Avatar>)
  //   } else {
  //     return (<Avatar src={playerState.avatar} />)
  //   }
  // }

  useEffect(() => {

    // get player corresponding to user if any, if not, build profile
    axios.get('/api/users/players', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data }) => {
        // console.log(data)

        setPlayerState({
          ...playerState,
          playerExists: true,
          avatar: data.avatar,
        })

      })
      .catch(err => {
        console.log(err)
      })

  }, [])


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
              // drops in from the top
              anchor="top"
              open={openState.open}
              onClose={toggleDrawer(false)}
              classes={{ paper: classes.drawer }}
            >
              {/* links in the drop down menu */}
              <List>
                <ListItem>
                  <Link className={classes.link} to="/globalchat">
                    <Button className={classes.link} onClick={toggleDrawer(false)}>Global Chat</Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link className={classes.link} to="/matches">
                    <Button className={classes.link} onClick={toggleDrawer(false)}>Matches</Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link className={classes.link} to="/profile">
                    <Button className={classes.link} onClick={toggleDrawer(false)}>Profile</Button>
                  </Link>
                </ListItem>
                {
                  (!localStorage.getItem('user') || window.location.pathname === '/') ? null : (
                    <ListItem>
                      <Link className={classes.link} to="/" onClick={handleLogout}>
                        <Button className={classes.link} onClick={toggleDrawer(false)}>
                          Logout
                        </Button>
                      </Link>
                    </ListItem>
                  )
                }
              </List>
            </Drawer>
          </Hidden>
          {/* App name */}
          <Typography variant="h5" className={classes.title}>
            <img className={classes.logo} src={plyr2} alt="player 2" />
          </Typography>

          {/* Links on navbar that are visible from screens small and larger */}
          <Hidden xsDown>
            <Link className={classes.link} to="/globalchat">
              <Button className={classes.link}>Chat</Button>
            </Link>
            <Link className={classes.link} to="/matches">
              <Button className={classes.link}>Matches</Button>
            </Link>
            <Link className={classes.link} to="/profile">
              <Button className={classes.link}>Profile</Button>
            </Link>
            {
              (!localStorage.getItem('user') || window.location.pathname === '/') ? null : (
                <Link className={classes.link} to="/">
                  <Button className={classes.link} onClick={handleLogout}>Logout</Button>
                </Link>
              )
            }
          </Hidden>
          <div>
            {
              (!localStorage.getItem('user') || window.location.pathname === '/') ? null : (
                <Avatar className={classes.avatar} src={playerState.avatar} />
              )
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar

// App Bar with a primary