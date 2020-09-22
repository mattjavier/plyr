import React from 'react'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  label: {
    color: '#f3e5f5'
  }
}))

const LogIn = () => {
  const classes = useStyles()

  return (
    <form>
      <p className={classes.label}>Username</p>
    </form>
  )
}

export default LogIn
