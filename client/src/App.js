import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './pages/About'
import LogIn from './pages/LogIn'
import Matches from './pages/Matches'
import Profile from './pages/Profile'
import GlobalChat from './pages/GlobalChat'

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

const useStyles = makeStyles((theme) => ({
  div: {
    paddingBottom: 65
  }
}))

const App = () => {
  const classes = useStyles()

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div>
          <CssBaseline />
          <Navbar />
          <div className={classes.div}>
            <Switch>
              <Route exact path="/" component={LogIn} />
              <Route exact path="/about" component={About} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/matches" component={Matches} />
              <Route exact path="/GlobalChat" component={GlobalChat} />
            </Switch>
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>

  )
}

export default App
