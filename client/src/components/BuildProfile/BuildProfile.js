import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Build_Step1 from '../Build_Step1'
import Build_Step2 from '../Build_Step2'
import Build_Step3 from '../Build_Step3'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '75%',
    },
  },
}));

const BuildProfile = () => {

  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <Build_Step1 />

      <Build_Step2 />

      <Build_Step3 />

      <p>
        <Button>Save</Button>
      </p>
    </form>
  )
}

export default BuildProfile
