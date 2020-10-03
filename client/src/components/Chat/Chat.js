import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import axios from 'axios'
import io from 'socket.io-client'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'


// Connects to server 3002 where socket is run
const socket = io.connect('http://localhost:3002')

const useStyles = makeStyles((theme) => ({
  // Another generic note: This style list style list originally came from the UserPlayer component and I'm editing as I go. So there's definitely unused styles here that'll eventually need pruned out.
  root: {
    margin: '8px',
  },
  head: {
    letterSpacing: 2,
    fontSize: '30px',
    textTransform: 'capitalize'
  },
  paper: {
    backgroundColor: '#4f5b62',
    margin: 'auto',
    padding: 10,
    width: '93%',
    height: 400,
    overflow: 'auto',
  },
  top: {
    backgroundColor: '#845bb3',
    margin: 'auto',
    width: '93%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  bottom: {
    backgroundColor: '#845bb3',
    padding: 10,
    margin: 'auto',
    width: '93%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  infoContainer: {
    paddingLeft: 5,
    paddingRight: 5
  },
  inner: {
    padding: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    fontSize: 50,
    margin: 20,
    boxShadow: theme.shadows[6],
    backgroundColor: '#263238',
    color: '#845bb3'
  },
  room: {
    color: '#ffffff',
    letterSpacing: 2,
    paddingBottom: 20
  },
  video: {
    width: '100%',
    borderRadius: 5,
    boxShadow: theme.shadows[6],
  },
  text: {
    color: '#1a1a1a'
  },
  input: {
    backgroundColor: '#161d22',
    margin: 0,
    // width: '93%',
  },
  iconButton: {
    padding: 10,
    color: '#845bb3'
  },
  textField: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  myMessage: {
    width: '100%',
    margin: '0px !Important',
  },
  myContent: {
    backgroundColor: '#414679',
    color: '#ffffff',
    margin: 10,
    borderRadius: 5,
    width: '75%',
  },
  notMyContent: {
    backgroundColor: '#845bb3',
    color: '#ffffff',
    margin: 10,
    borderRadius: 5,
    width: '75%',
  },
}))

let mine

const Chat = () => {
  const classes = useStyles()

  const [myselfState, setMyselfState] = useState({
    myUsername: '',
  })

  const [messageState, setMessageState] = useState({
    message: '',
    name: '',
    room: 'global'
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
    console.log(chatState)
  })

  useEffect(() => {
    axios.get('/api/users/myself', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data }) => {
        console.log(data)
        setMyselfState({ ...myselfState, myUsername: data.username })
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className={classes.root}>
      <Paper className={classes.top} elevation={5}>
        <Typography
          className={classes.room}>
          Global Chat
        </Typography>
      </Paper>

      <Paper className={classes.paper}>
        <Paper className={classes.content}>Welcome to Global Chat</Paper>
        {
          chatState.map(message => {
            // IDK why this is giving error messages here. Basically, I'm trying to check if the message is from myself or not and assign one class to messages from myself and another class to messages from others. 
            message.name === myselfState.myUsername ? mine = classes.myContent : classes.notMyContent
            console.log(mine)
          }
            (< Paper className={mine} elevation={5} >
              {/* Each individual message */}
              { message.name}: {message.message}
            </Paper>

            ))
        }
      </Paper>

      {/* Bottom of chat field */}
      <Paper className={classes.bottom} elevation={5}>
        <form className={classes.message} noValidate autoComplete="off" onSubmit={messageState.onMessageSubmit}>
          <FormControl className={clsx(classes.textField)} variant="outlined">
            <OutlinedInput
              name="message"
              value={messageState.message}
              type="text"
              placeholder="type your message"
              className={classes.input}
              onChange={messageState.handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="send message"
                    onClick={messageState.onMessageSubmit}
                    edge="end"
                    className={classes.iconButton}
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </form>
      </Paper>
    </div >
  )
}
export default Chat
