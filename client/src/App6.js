import React, { useState, useEffect } from 'react'
import axios from 'axios'
import io from 'socket.io-client'

// Connects to server 3002 where socket is run
const socket = io.connect('http://localhost:3002')

const App = () => {

    const [myselfState, setMyselfState] = useState({
        myUsername: '',
        myProfileId: ''
    })

    const [messageState, setMessageState] = useState({
        message: '',
        name: ''
    })
    const [chatState, setChatState] = useState([])


    const handleInputChange = event => {
        setMessageState({ ...messageState, [event.target.name]: event.target.value })
    }

    // socket.on('chatMessage', ({from, fromId, to, toId, message}) => {
    //     io.emit(toId, {from, fromId, to, toId, message})
    //   })

    const onMessageSubmit = event => {
        event.preventDefault()
        let message = messageState.message
        let name = myselfState.myUsername || messageState.name
        let myselfId = "5f7659478fcb5033480c2127"
        let to = "someguy"
        let toId = "5f7659478fcb5033480c2127"
        socket.emit('chatMessage', { name, myselfId, to, toId, message })
        setMessageState({...messageState, message: '' })
    }


    socket.on("5f7659478fcb5033480c2127", ({from, fromId, to, toId, message}) => {
        console.log('id specific message returned')
        console.log(`from ${from}`)
        setChatState([...chatState, { name: to, message }])
    })

    useEffect(() => {
        socket.on('message', ({ name, message }) => {
            setChatState([...chatState, { name, message }])
        })
        axios.get('/api/users/myself', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('user')}`
            }})
            .then(({data}) => {
                console.log(data)
                setMyselfState({ ...myselfState, myUsername: data.username, myProfileId: data.player_profile })
            })
            .catch(err => console.log(err))
    }, [])

    // listens to server 3002 to recieve 'message'
    socket.on('message', ({ name, message }) => {
        console.log('general chat message returned')
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
                <input
                    onChange={handleInputChange}
                    name="message"
                    value={messageState.message}
                    label="Message"
                />

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
            <button onClick={() => console.log(myselfState)}>Check myself data</button>
        </>
    )
}
export default App
