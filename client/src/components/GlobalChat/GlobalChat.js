import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import Chat from '../Chat'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    width: '90%'
  },
  formControl: {
    marginTop: theme.spacing(2),
    margin: 'auto',
    width: '50%',
    backgroundColor: '#414679',
    borderRadius: 5,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const GlobalChat = () => {
  const classes = useStyles()

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <>
      {
        localStorage.getItem('user') ? (
          <div className={classes.root}>

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Choose a Message Board</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Choose a Message Board"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>


            <Chat />
          </div >
        ) : window.location.href = '/'
      }
    </>
  )
}

export default GlobalChat
