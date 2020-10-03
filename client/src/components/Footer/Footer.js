import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  footer: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    '&:hover': {
      color: '#414679'
    }
  },
  menuPaper: {
    backgroundColor: '#845bb3'
  }
}))

const Footer = () => {

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar className={classes.footer}>
      <Toolbar>
        <Typography variant="body2">
          &copy; plyr 2 | 2020
        </Typography>
        <div className={classes.grow}></div>
        <Typography variant="overline">
          Powered by React
        </Typography>
        <IconButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} edge="end" color="inherit">
          <MoreIcon />
        </IconButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          classes={{ paper: classes.menuPaper }}
        >
          <MenuItem onClick={handleClose} >
            <Link to="/about" className={classes.link}>ABOUT</Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Footer