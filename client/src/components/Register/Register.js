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
import InputLabel from '@material-ui/core/InputLabel'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
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
}))

const Register = () => {
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
      })
      .catch(err => console.log(err))
  }

  const handleClickShowPassword = () => {
    setRegisterState({ ...registerState, showPassword: !registerState.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Register</h2>
      <p id="simple-modal-description">
        <form className={classes.root} noValidate autoComplete="off" onSubmit={registerState.handleRegister}>
          {/* Name Field */}
          <TextField
            required
            id="outlined-required"
            label="Name"
            variant="outlined"
            name="name"
            onChange={registerState.handleInputChange}
          />

          {/* Email Field */}
          <TextField
            required
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
            id="outlined-required"
            label="Username"
            name="username"
            variant="outlined"
            onChange={registerState.handleInputChange}
          />

          {/* Password field */}
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
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
          <Button onClick={registerState.handleRegister}>Submit</Button>
        </form>
      </p>
    </div>
  )

  return (
    <div>
      <Button onClick={handleOpen}>
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
  )
}

export default Register