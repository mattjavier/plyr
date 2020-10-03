import React, { useState, useEffect } from 'react'
import axios from 'axios'
import io from 'socket.io-client'
import { TextField } from '@material-ui/core'

// Connects to server 3002 where socket is run
const socket = io.connect('http://localhost:3002')

const App = () => {

    const [messageState, setMessageState] = useState({
        message: '',
        name: ''
    })
    const [chatState, setChatState] = useState([])


    // const renderChat = () => {
    //     return chatState.map(({ name, message }, index) => (
    //         <div key={index}>
    //             <h3>{name}: <span>{message}</span></h3>
    //         </div>
    //     ))
    // }

    const handleInputChange = event => {
        setMessageState({ ...messageState, [event.target.name]: event.target.value })
    }

    const onMessageSubmit = event => {
        event.preventDefault()
        const { name, message } = messageState
        socket.emit('message', { name, message })
        setMessageState({...messageState, message: '', name })
    }

    useEffect(() => {
        socket.on('message', ({ name, message }) => {
            setChatState([...chatState, { name, message }])
        })
    }, [])

    // listens to server 3002 
    socket.on('message', ({ name, message }) => {
        setChatState([...chatState, { name, message }])
    })

    const buttonClicked = event => {
        event.preventDefault()
        console.log('button clicked on front end')
        socket.emit('button clicked')
    }


    return (
        <>
            <h1>Chat room</h1>
            <form onSubmit={onMessageSubmit}>
                <h1>User</h1>
                <input
                    onChange={handleInputChange}
                    name="name"
                    value={messageState.name}
                    label="Name"
                />
                <h1>Message</h1>
                <textarea
                    onChange={handleInputChange}
                    name="message"
                    value={messageState.message}
                    label="Message"> 
                </textarea>

                <button>Send Message</button>
            </form>

            <h1>Chat Log</h1>
            {/* {renderChat()} */}
            {
                chatState.length > 0 ? (
                    chatState.map(message => <p>{message.name}: {message.message}</p>)
                ) : <p>No messages</p>
            }

            <hr/>
            <button onClick={buttonClicked}>"button clicked" to back end</button>
            <button onClick={() => console.log(chatState)}>Check Chat</button>
        </>
    )
}
export default App
