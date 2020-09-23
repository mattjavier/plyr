import React, { createContext } from 'react'

const UserContext = createContext({
  name: '',
  username: '',
  email: '',
  password: '',
  handleInputChange: () => { },
  handleRegisterUser: () => { },
  handleLoginUser: () => { },
  handleLogout: () => { }
})

export default UserContext