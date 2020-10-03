import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Chat from '../../components/Chat'


const GlobalChat = () => {


  return (
    <>
      {
        localStorage.getItem('user') ? (
          <>
            <h1>Global Chat</h1>
            <Chat />
          </>
        ) : window.location = '/'
      }
    </>
  )
}

export default GlobalChat
