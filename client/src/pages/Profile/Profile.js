import React, { useState, useEffect } from 'react'
import axios from 'axios'

import UserPlayer from '../../components/UserPlayer'
import BuildProfile from '../../components/BuildProfile'


const Profile = () => {

  const [playerState, setPlayerState] = useState({
    playerExists: false,
    player_profile: '',
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
      .then(({ data }) => {
        console.log(data)

        setPlayerState({
          ...playerState,
          playerExists: true,
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
          highlight: data.highlight
        })
      })
      .catch(err => {
        console.log(err)
        return (<BuildProfile />)
      })
  }, [])

  return (
    <>
      {
        localStorage.getItem('user') ? (
          playerState.playerExists ?
            <UserPlayer player={playerState} /> :
            <BuildProfile />
        ) : window.location = '/'
      }
    </>
  )
}

export default Profile
