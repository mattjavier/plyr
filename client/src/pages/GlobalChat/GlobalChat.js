import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import Chat from '../../components/Chat'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  head: {
    letterSpacing: 2,
    fontSize: '30px',
    textTransform: 'capitalize'
  },
}))


const GlobalChat = () => {
  const classes = useStyles()


  return (
    <>
      {
        localStorage.getItem('user') ? (
          <div className={classes.root}>
            <Typography
              variant="overline"
              className={classes.head}
            >
              Global Chat
        </Typography>
            <Chat />
          </div>
        ) : window.location = '/'
      }
    </>
  )
}

export default GlobalChat
