import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const LogIn = () => {
  const classes = useStyles()

  return (
    <>
    <h1>Log In</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue="Username"
          variant="outlined"
        />
        </form>
    </>
  )
}

export default LogIn
