import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Player from '../../components/Player'


const Profile = () => {

  const [playerState, setPlayerState] = useState({
    exists: false,
    avatar: '',
    bio: '',
    systems: [],
    games: [],
    genres: [],
    competetive: false,
    user: ''
  })

  useEffect(() => {
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
          systems: player.systems, 
          games: player.games, 
          genres: player.genres, 
          competetive: player.competetive, 
          user: player.user 
        })
      })
      .catch(err => {
        console.log(err)
        window.location = '/'
      })
  }, [])

  return (
    <>
      {
        playerState.exists ? 
        <Player player={playerState} />
        : <form>Form</form>
      }
    </>
  )
}

export default Profile
