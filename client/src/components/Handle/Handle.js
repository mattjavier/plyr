import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '100% !important',
    },
  },
  input: {
    backgroundColor: '#161d22',
  },
  form: {
    justifyContent: 'center',
  }
}))

export default function BasicTextFields() {
  const classes = useStyles()

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        variant="outlined"
        id="standard-basic"
        label="Player Handle"
        placeholder="Player Handle"
        size="small"
        className={classes.input}
      />

    </form>
  )
}
