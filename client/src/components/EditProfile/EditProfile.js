import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import System from '../System'
import Genre from '../Genre'
import Game from '../Game'
import Avatar from '../AvatarArray'
import Typography from '@material-ui/core/Typography'
import ProfileContext from '../../utils/ProfileContext'
import axios from 'axios'
import API from '../../utils/API'

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
    borderRadius: 5,
    backgroundColor: '#161d22',
  },
  head: {
    letterSpacing: 2,
    fontSize: '30px',
    textTransform: 'capitalize',
    display: 'block',
  },
  modalPaper: {
    backgroundColor: '#263238',
    marginTop: 40,
    marginBottom: 40,
    margin: 'auto',
    borderRadius: 5,
    width: '90%',
    height: '90%',
    overflow: 'auto'
  },
  editButton: {
    color: '#263238',
    display: 'inline',
    margin: 0,
    padding: 0,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: '18px'
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

}))

const EditProfile = props => {

  const classes = useStyles()

  // MODAL

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)


  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    window.location = "/profile"
  }

  const editProfile = () => {
    console.log('edit profile')
    console.log(props.player.player_profile)


  }

  // modal body
  const [isCompetitive, setCompetitive] = useState(props.player.competetive)

  const handleSwitchChange = () => {
    setCompetitive(!isCompetitive)
  }

  const [profileState, setProfileState] = useState({
    avatar: props.player.avatar,
    bio: props.player.bio,
    competetive: props.player.competetive,
    discord: props.player.discord,
    highlight: props.player.highlight,
    xbox: props.player.xbox,
    playstation: props.player.playstation,
    nintendoSwitch: props.player.nintendoSwitch,
    pc: props.player.pc,
    games: props.player.games,
    genres: props.player.genres,
    user: props.player.user,
    player_profile: props.player.player_profile,
    searchGames: props.player.searchGames
  })


  profileState.handleInputChange = (event) => {
    setProfileState({ ...profileState, [event.target.name]: event.target.value })
    // console.log(profileState)
  }

  profileState.handlePlayerHandle = event => {
    setProfileState({ ...profileState, [event.target.name]: event.target.value })
  }

  profileState.handleGenre2 = (event, values) => {
    console.log(values)
    const genres = values.map(value => {
      if (typeof value === 'string') {
        return value
      } else {
        return value.genre
      }
    })
    setProfileState({ ...profileState, genres })
  }

  profileState.handleGames = event => {
    event.preventDefault()
    let games = profileState.games
    setProfileState({ ...profileState, games, searchGames: '' })
    profileState.games.push(profileState.searchGames)
  }

  profileState.handleAvatar = (event, values) => {
    setProfileState({ ...profileState, [event.target.name]: event.target.value })
  }

  profileState.handleDeleteGames = (gameToDelete) => () => {
    setProfileState({ ...profileState, games: profileState.games.filter(game => gameToDelete !== game) })
  }

  profileState.handleSave = () => {

    axios.get('/api/users/myself', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data }) => {
        let player = {
          avatar: profileState.avatar || data.username.slice(0, 1),
          bio: profileState.bio,
          competetive: isCompetitive,
          discord: profileState.discord,
          highlight: profileState.highlight,
          xbox: profileState.xbox,
          playstation: profileState.playstation,
          nintendoSwitch: profileState.nintendoSwitch,
          pc: profileState.pc,
          games: profileState.games,
          genres: profileState.genres,
          user: data._id
        }
        axios.put(`/api/players/${profileState.player_profile}`, player)
          .then(() => {

            handleClose()
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  const body = (
    <div className={classes.modalPaper}>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <Typography
          variant="overline"
          className={classes.head}
        >
          Build Profile
        </Typography>

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
            checked={isCompetitive}
            onClick={handleSwitchChange}
            name="competetive"
            value={profileState.competetive}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        Competitive
      </p>
        <ProfileContext.Provider value={profileState}>
          <System />
          <Genre edit={true} />
          <Game />
          <Avatar />
        </ProfileContext.Provider>

        <p>
          <Button variant="contained" color="primary" onClick={profileState.handleSave}>Save</Button>
        </p>
      </form>
    </div>
  )

  return (
    <div className={classes.button}>
      <IconButton className={classes.editButton} variant="contained" aria-label="edit" onClick={handleOpen}>
        <EditIcon /> &nbsp;<span className={classes.buttonText}>edit profile</span>
      </IconButton>
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

export default EditProfile
