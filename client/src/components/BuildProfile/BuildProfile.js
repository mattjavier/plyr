import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import System from '../System'
import Genre from '../Genre'
import Game from '../Game'
import Typography from '@material-ui/core/Typography'
import ProfileContext from '../../utils/ProfileContext'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '75%',
    },
    margin: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  instructions: {
    color: '#ffffff'
  },
  input: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: '#161d22',
  },
}))

const BuildProfile = () => {

  const classes = useStyles()

  const [compState, setCompState] = useState({
    checkedA: false
  })

  compState.handleSwitchChange = (event) => {
    setCompState({ ...compState, [event.target.name]: event.target.checked })
  }

  const [profileState, setProfileState] = useState({
    avatar: '',
    bio: '',
    xbox: '',
    playstation: '',
    nintendoSwitch: '',
    pc: '',
    games: [],
    genres: [],
    competetive: false,
    discord: '',
    highlight: '',
    user: '',
    searchGames: ''
  })

  profileState.handleInputChange = (event) => {
    setProfileState({ ...profileState, [event.target.name]: event.target.value })
  }

  profileState.handlePlayerHandle = event => {
    setProfileState({ ...profileState, [event.target.name]: event.target.value })
  }

  profileState.handleGenre = (event, values) => {
    setProfileState({ ...profileState, genres: values.map(value => value.genre) })
  }

  profileState.handleGames = event => {
    event.preventDefault()
    let games = profileState.games
    setProfileState({ ...profileState, games, searchGames: '' })
    profileState.games.push(profileState.searchGames)
  }

  profileState.handleDeleteGames = (gameToDelete) => () => {
    setProfileState({ ...profileState, games: profileState.games.filter(game => gameToDelete !== game) })
  }

  profileState.handleSave = event => {
    event.preventDefault()

    axios.get('/api/users/myself', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data }) => {
        let player = {
          avatar: data.username.slice(0, 1),
          bio: profileState.bio,
          xbox: profileState.xbox,
          playstation: profileState.playstation,
          nintendoSwitch: profileState.nintendoSwitch,
          pc: profileState.pc,
          games: profileState.games,
          genres: profileState.genres,
          competetive: profileState.competetive,
          discord: profileState.discord,
          user: data._id
        }

        axios.post('/api/players', player)
          .then(() => {
            window.location = '/matches'
          })
          .catch(err => console.log(err))

      })
      .catch(err => console.log(err))

  }

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={event => event.preventDefault()}
    >

      {/* Bio */}

      <TextField
        id="outlined-multiline-static"
        label="Bio"
        placeholder="Describe your gaming style."
        multiline
        rows={4}
        variant="outlined"
        name="bio"
        value={profileState.bio}
        className={classes.input}
        onChange={profileState.handleInputChange}
      />


      {/* Discord username */}
      <TextField
        id="outlined-required"
        label="Discord Username"
        variant="outlined"
        name="discord"
        placeholder="enter your Discord username"
        value={profileState.discord}
        className={classes.input}
        onChange={profileState.handleInputChange}
      />

      {/* Highlight Video */}
      <TextField
        id="outlined-required"
        label="Video Highlight Link"
        variant="outlined"
        name="highlight"
        placeholder="enter video's YouTube link"
        value={profileState.highlight}
        className={classes.input}
        onChange={profileState.handleInputChange}
      />

      {/* Competitive Switch */}
      <p>
        <Typography
          variant="overline"
          className={classes.instructions}
        >
          Which best describes your playing style?
        </Typography>
      </p>
      <p>
        Casual
        <Switch
          checked={compState.checkedA}
          onChange={compState.handleSwitchChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        Competitive
      </p>
      <ProfileContext.Provider value={profileState}>
        {/* <System /> */}
        <System />
        <Genre />
        <Game />
      </ProfileContext.Provider>

      <p>
        <Button variant="contained" color="primary" onClick={profileState.handleSave}>Save</Button>
      </p>
    </form>
  )
}

export default BuildProfile
