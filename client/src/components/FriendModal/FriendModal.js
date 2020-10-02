import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Player from '../Player'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '75%',
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[5],
    paddingTop: 1,
  },
  modal: {
    position: 'absolute',
    top: 50,
    borderRadius: 1,
    overflowY: 'scroll'
  }
}))

const FriendModal = props => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [playerState, setPlayerState] = useState({
    avatar: '',
    bio: '',
    xbox: '',
    playstation: '',
    nintendoSwitch: '',
    pc: '',
    competetive: false,
    genres: [],
    games: [],
    discord: '',
    highlight: '',
    username: ''
  })

  useEffect(() => {
    axios.get(`/api/players/${props.friend.playerId}`)
      .then(({ data }) => {

        setPlayerState({
          ...playerState,
          player_profile: data._id,
          user: data.user,
          avatar: data.avatar,
          bio: data.bio,
          xbox: data.xbox,
          playstation: data.playstation,
          nintendoSwitch: data.nintendoSwitch,
          pc: data.pc,
          games: data.games,
          genres: data.genres,
          competetive: data.competetive,
          discord: data.discord,
          highlight: data.highlight,
          pendingRequest: data.pendingRequest,
          friendsList: data.friendsList,
          friendStatus: 'friends'
        })

      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        View Profile
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <Player player={playerState} user={props.friend.name} />
      </Modal>
    </div>
  )
}

export default FriendModal