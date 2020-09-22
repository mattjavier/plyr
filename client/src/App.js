import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles' 

import About from './pages/About'
import LogIn from './pages/LogIn'
import Matches from './pages/Matches'
import Profile from './pages/Profile'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#263238'
    },
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#845bb3',
    },
  },
})

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div>
          <CssBaseline />
          
          <Switch>
            <Route exact path="/" component={LogIn}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/match" component={Matches}/>
          </Switch>

        </div>
      </MuiThemeProvider>
    </Router>
  )
}

export default App
