import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Player from '../../components/Player'
import BuildProfile from '../../components/BuildProfile'


const Profile = () => {

  const [playerState, setPlayerState] = useState({
    exists: false,
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
    user: ''
  })

  useEffect(() => {

    // get player corresponding to user if any, if not, build profile
    axios.get('/api/users/players', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data: player }) => {
        console.log(player)

        setPlayerState({ 
          ...playerState, 
          exists: true, 
          avatar: player.avatar, 
          bio: player.bio, 
          xbox: player.xbox,
          playstation: player.playstation,
          switch: player.switch,
          pc: player.pc, 
          games: player.games, 
          genres: player.genres, 
          competetive: player.competetive, 
          discord: player.discord,
          user: player.user 
        })
      })
      .catch(err => {
        console.log(err)
        //window.location = '/'
      })
  }, [])

  return (
    <>
      {
        playerState.exists ? 
        <Player player={playerState} />
        : <BuildProfile />
      }
    </>
  )
}

export default Profile
