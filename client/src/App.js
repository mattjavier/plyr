import React from 'react'
import About from './pages/About'
import LogIn from './pages/LogIn'
import Matches from './pages/Matches'
import Profile from './pages/Profile'
import logo from './assets/logo.jpg'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

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
  },
})

const App = () => {
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

        </div>
      </MuiThemeProvider>
    </Router>
  )
}

export default App
