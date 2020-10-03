import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Chat from '../../components/Chat'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '8px',
  },
}))

const GlobalChat = () => {
  const classes = useStyles()

  return (
    <>
      {
        localStorage.getItem('user') ? (
          <div className={classes.root}>
            <Chat />
          </div >
        ) : window.location.href = '/'
      }
    </>
  )
}

export default GlobalChat
