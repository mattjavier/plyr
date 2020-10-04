import React, { useState } from 'react'
import axios from 'axios'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


// let snackType
let snackMessage
let snackSeverity


function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    margin: 'auto',
    width: 275,
    backgroundColor: '#263238',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    borderRadius: 5,
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    marginBottom: theme.spacing(2),
    width: '25ch',
    borderRadius: 5,
    backgroundColor: '#161d22',
  },
  iconButton: {
    color: '#7F58AD',
    position: 'relative',
    right: -12,
  },
  button: {
    display: 'inline',
    position: 'relative',
    top: 4,
    marginLeft: theme.spacing(2.5),
  },
  submit: {
    display: 'block',
  },
  head: {
    letterSpacing: 2,
    fontSize: '30px',
    textTransform: 'capitalize'
  },
}))

const Register = () => {

  // MODAL
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  //SNACKBAR
  const [openSnack, setOpenSnack] = useState(false)

  const handleSnackClick = (snackType) => {
    console.log(snackType)
    if (snackType === 'error') {
      snackSeverity = 'error'
      snackMessage = 'Oops, something went wrong. Try again!'
    } else if (snackType === 'success') {
      snackSeverity = 'success'
      snackMessage = 'Account created! Please log in.'
    } else if (snackType === 'missing') {
      snackSeverity = 'error'
      snackMessage = 'Form incomplete. All fields required.'
    } else if (snackType === 'password') {
      snackSeverity = 'error'
      snackMessage = 'Passwords must match.'
    }
    console.log(snackSeverity)
    console.log(snackMessage)

    setOpenSnack(true);

  };

  const handleSnackClose = (event, reason) => {
    // snackSeverity = ''
    // snackMessage = ''
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };


  // Register
  const [registerState, setRegisterState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
  })

  registerState.handleInputChange = event => {
    setRegisterState({ ...registerState, [event.target.name]: event.target.value })
  }

  registerState.handleRegister = event => {
    event.preventDefault()

    console.log(registerState.name)

    if (registerState.name === '' || registerState.username === '' || registerState.email === '' || registerState.password === '') {
      // snackType = 
      handleSnackClick('missing')

    } else {
      if (registerState.password !== registerState.confirmPassword) {
        handleSnackClick('password')
      } else {
        setOpen(false)
        console.log(registerState)
        axios.post('/api/users/register', {
          name: registerState.name,
          username: registerState.username,
          email: registerState.email,
          password: registerState.password,
        })
          .then(() => {
            console.log('Register complete')
            // Toast or notification function goes here
            setRegisterState({
              ...registerState,
              name: '',
              email: '',
              username: '',
              password: '',
              confirmPassword: '',
            })
            handleSnackClick('success')
          })
          .catch(err => {
            console.log(err)
            handleSnackClick('error')
          })
      }
    }
  }

  const handleClickShowPassword = () => {
    setRegisterState({ ...registerState, showPassword: !registerState.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography
        variant="overline"
        className={classes.head}
      >
        Register
        </Typography>
      <p id="simple-modal-description">
        <form className={classes.root} noValidate autoComplete="off" onSubmit={registerState.handleRegister}>
          {/* Name Field */}
          <TextField
            required
            className={classes.input}
            id="outlined-required"
            label="Name"
            variant="outlined"
            name="name"
            onChange={registerState.handleInputChange}
          />

          {/* Email Field */}
          <TextField
            required
            className={classes.input}
            id="outlined-required"
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            onChange={registerState.handleInputChange}
          />

          {/* Username Field */}
          <TextField
            required
            className={classes.input}
            id="outlined-required"
            label="Username"
            name="username"
            variant="outlined"
            onChange={registerState.handleInputChange}
          />

          {/* Password field */}
          <FormControl className={classes.input} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-password"
              label="Password"
              variant="outlined"
              name="password"
              type={registerState.showPassword ? 'text' : 'password'}
              value={registerState.password}
              onChange={registerState.handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    className={classes.iconButton}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {registerState.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {/* Confirm Password field */}
          <FormControl className={classes.input} variant="outlined">
            <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
            <OutlinedInput
              required
              id="confirm-password"
              label="Confirm Password"
              variant="outlined"
              name="confirmPassword"
              type={registerState.showPassword ? 'text' : 'password'}
              value={registerState.confirmPassword}
              onChange={registerState.handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    className={classes.iconButton}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {registerState.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {/* Submit button */}
          <Button className={classes.submit} variant="contained" color="primary" onClick={registerState.handleRegister}>Submit</Button>
        </form>
      </p>
    </div>
  )

  return (
    <>
      <div className={classes.button}>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Register
      </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>


      <Snackbar className={classes.snack} open={openSnack} autoHideDuration={3000} onClose={handleSnackClose}>
        <Alert onClose={handleSnackClose} severity={snackSeverity}>{snackMessage}</Alert>
      </Snackbar>
    </>
  )
}

export default Register