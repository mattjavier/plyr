import { createContext } from 'react'

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
  highlight: '',
  user: '',
  searchGames: '',
  handleInputChange: () => { },
  handlePlayerHandle: () => { },
  handleGenre: () => { },
  handleGenre2: () => { },
  handleGames: () => { },
  handleDeleteGames: () => { }
})

export default ProfileContext