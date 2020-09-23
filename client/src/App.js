import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { register } from './serviceWorker'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles' 
import logo from './assets/logo.jpg'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './pages/About'
import LogIn from './pages/LogIn'
import Matches from './pages/Matches'
import Profile from './pages/Profile'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#263238'
    },
    surface: {
      default: '#4f5b62'
    },
    primary: {
      main: '#845bb3',
    },
    secondary: {
      main: '#414679',
    },
    text: {
      primary: '#845bb3',
      secondary: '#f3e5f5'
    },
  },
})

const App = () => {


  // Register
  const [registerState, setRegisterState] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  registerState.handleInputChange = event => {
    setRegisterState({ ...registerState, [event.target.name]: event.target.value })
  }

  registerState.handleRegister = event => {
    event.preventDefault()
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


  // Login
  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  })

  loginState.handleInputChange = event => {
    setLoginState({ ...loginState, [event.target.name]: event.target.value })
  }

  loginState.handleLogin = event => {
    event.preventDefault()
    console.log(loginState)
    axios.post('/api/users/login', {
      username: loginState.username,
      password: loginState.password,
    })
      .then(({ data: token }) => {
        if (token) {
          localStorage.setItem('user', token)
          console.log(token)
          // window.location = '/profile'
        }
        else {
          alert('WRONG!')
        }})
      .catch(err => console.log(err))

  }

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/matches" component={Matches} />
          </Switch>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  )
}

export default App
