import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Chat from '../../components/Chat'


const GlobalChat = () => {

  return (
    <>
      <h1>Global Chat</h1>
      <Chat />
    </>
  )
}

export default GlobalChat
