import React, { useState } from 'react'
import axios from 'axios'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Register from '../../components/Register'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  snack: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const LogIn = () => {
  const classes = useStyles()

  // Login
  const [loginState, setLoginState] = useState({
    username: '',
    password: '',
    showPassword: false,
  })

  loginState.handleInputChange = event => {
    setLoginState({ ...loginState, [event.target.name]: event.target.value })
  }

  loginState.handleLogin = event => {
    event.preventDefault()
    //console.log(loginState)
    axios.post('/api/users/login', {
      username: loginState.username,
      password: loginState.password,
    })
      .then(({ data: token }) => {
        if (token) {
          localStorage.setItem('user', token)
          console.log(token)
          window.location = '/profile'
        }
        else {
          //alert('WRONG!')
          handleClick()
          setLoginState({ ...loginState, username: '', password: '' })
        }})
      .catch(err => {
        console.log(err)
        window.location = '/'
      })
  }

  const handleClickShowPassword = () => {
    setLoginState({ ...loginState, showPassword: !loginState.showPassword })
  }


  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

    
    //SNACKBAR STUFF
    const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false)
  }


  return (
    <>
      <h1>Log In</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Username"
          name="username"
          variant="outlined"
          value={loginState.username}
          onChange={loginState.handleInputChange}
        />
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-password"
            label="Password"
            variant="outlined"
            type={loginState.showPassword ? 'text' : 'password'}
            value={loginState.password}
            name="password"
            onChange={loginState.handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {loginState.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button onClick={loginState.handleLogin}>Log In</Button>
        <Register />

      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Invalid Login Credentials!
        </Alert>
      </Snackbar>
    </>
  )
}

export default LogIn
