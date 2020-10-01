import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Register from '../../components/Register'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

let snackType
let snackMessage
let snackSeverity

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  input: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '25ch',
    borderRadius: 5,
    display: 'block',
    backgroundColor: '#161d22',
  },
  snack: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  button: {
    display: 'inline',
    marginTop: theme.spacing(1),
  },
  iconButton: {
    color: '#7F58AD'
  },
  head: {
    letterSpacing: 2,
    fontSize: '30px',
    textTransform: 'capitalize'
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

    if (loginState === '' || loginState.password === '') {
      // snackType = 
      handleSnackClick('missing')

    } else {
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
            snackType = 'invalid log in'
            handleSnackClick(snackType)
            setLoginState({ ...loginState, username: '', password: '' })
          }
        })
        .catch(err => {
          console.log(err)
          window.location = '/'
        })
    }
  }

  const handleClickShowPassword = () => {
    setLoginState({ ...loginState, showPassword: !loginState.showPassword })
  }


  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }


  //SNACKBAR STUFF
  const [open, setOpen] = useState(false)

  const handleSnackClick = (snackType) => {
    if (snackType === 'invalid log in') {
      snackSeverity = 'error'
      snackMessage = 'Invalid Login Credentials!'
    } else if (snackType === 'missing') {
      snackSeverity = 'error'
      snackMessage = 'Form incomplete. All fields required.'
    }
    setOpen(true)
  };

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false)
  }


  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
      >

        <Typography
          variant="overline"
          className={classes.head}
        >
          Log In
        </Typography>
        <TextField
          className={classes.input}
          label="Username"
          name="username"
          variant="outlined"
          value={loginState.username}
          onChange={loginState.handleInputChange}
        />
        <FormControl className={classes.input} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
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
                  className={classes.iconButton}
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
        <Button className={classes.button} variant="contained" color="primary" onClick={loginState.handleLogin}>Log In</Button>
        <Register />

      </form>

      <Snackbar className={classes.snack} open={open} autoHideDuration={3000} onClose={handleSnackClose}>
        <Alert onClose={handleSnackClose} severity={snackSeverity}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default LogIn
