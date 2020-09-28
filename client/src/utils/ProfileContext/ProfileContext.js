import React, { createContext } from 'react'

const ProfileContext = createContext({
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
  user: '',
  handleInputChange: () => { },
  handlePlayerHandle: () => { }
})

export default ProfileContext