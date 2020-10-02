import React, { useState, useEffect } from 'react'
import axios from 'axios'
import io from 'socket.io-client'

// Connects to server 3002 where socket is run
const socket = io.connect('http://localhost:3002')

const Chat = () => {

    const [myselfState, setMyselfState] = useState({
        myUsername: '',
    })

    const [messageState, setMessageState] = useState({
        message: '',
        name: ''
    })
    const [chatState, setChatState] = useState([])


    messageState.handleInputChange = event => {
        setMessageState({ ...messageState, [event.target.name]: event.target.value })
    }

    messageState.onMessageSubmit = event => {
        event.preventDefault()
        let message = messageState.message
        let name = myselfState.myUsername
        socket.emit('message', { name, message })
        setMessageState({ ...messageState, message: '' })
        console.log(event.target)
    }

    // listens to server 3002 to recieve 'message'
    socket.on('message', ({ name, message }) => {
        // console.log('general chat message returned')
        setChatState([...chatState, { name, message }])
    })

    useEffect(() => {
        axios.get('/api/users/myself', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('user')}`
            }
        })
            .then(({ data }) => {
                // console.log(data)
                setMyselfState({ ...myselfState, myUsername: data.username })
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <h1>Chat room</h1>
            <form onSubmit={messageState.onMessageSubmit}>
                <h1>Message</h1>
                <input
                    onChange={messageState.handleInputChange}
                    name="message"
                    value={messageState.message}
                    label="Message"
                />

                <button>Send Message</button>
            </form>

            <h1>Chat Log</h1>
            {
                chatState.length > 0 ? (
                    chatState.map(message => <p>{message.name}: {message.message}</p>)
                ) : <p>Welcome to Global Chat</p>
            }

            <hr />
            <button onClick={() => console.log(chatState)}>Check Chat</button>
            <button onClick={() => console.log(myselfState)}>Check myself data</button>
        </>
    )
}
export default Chat
