import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import Typography from '@material-ui/core/Typography'
// import InputLabel from '@material-ui/core/InputLabel'
// import MenuItem from '@material-ui/core/MenuItem'
// import FormHelperText from '@material-ui/core/FormHelperText'
// import FormControl from '@material-ui/core/FormControl'
// import Select from '@material-ui/core/Select'

import Chat from '../../components/Chat'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    width: '90%'
  },
  // formControl: {
  //   marginTop: theme.spacing(2),
  //   margin: 'auto',
  //   width: '100%',
  //   backgroundColor: '#414679',
  //   color: '#ffffff',
  //   borderRadius: 5,
  //   padding: 0
  // },
  // select: {
  //   backgroundColor: '#414679',
  //   color: '#ffffff',
  // },
  // menuItem: {
  //   backgroundColor: '#414679',
  //   color: '#ffffff',
  // }
}))

// const style = {
//   backgroundColor: '#414679'
// }

const GlobalChat = () => {
  const classes = useStyles()

  // const [room, setRoom] = React.useState('');

  // const handleChange = (event) => {
  //   setRoom(event.target.value);
  //   console.log(room)
  // };


  return (
    <>
      {
        localStorage.getItem('user') ? (
          <div className={classes.root}>

            {/* <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel style={style} id="demo-simple-select-outlined-label">Choose a Message Board</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={room}
                onChange={handleChange}
                label="Choose a Message Board"
                className={classes.select}
              >
                <MenuItem style={style} className={classes.menuItem} value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem className={classes.menuItem} value="xbox">xbox</MenuItem>
                <MenuItem className={classes.menuItem} value="playstation">PlayStation</MenuItem>
                <MenuItem className={classes.menuItem} value="nintendo">Nintendo Switch</MenuItem>
                <MenuItem className={classes.menuItem} value="pc">PC</MenuItem>
              </Select>
            </FormControl> */}


            {/* <Chat room={room} /> */}
            <Chat />
          </div >
        ) : window.location.href = '/'
      }
    </>
  )
}

export default GlobalChat
