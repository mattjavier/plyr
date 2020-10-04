import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import axios from 'axios'
import io from 'socket.io-client'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'


// Connects to server 3002 where socket is run
const socket = io.connect('https://plyr-2.herokuapp.com/globalchat:3002', { secure: true, reconnection: true, rejectUnauthorized: false })
// const socket = io.connect('https://plyr-2.herokuapp.com/globalchat:3002' || 'http://localhost:3002')


// this is to help set the hight of the chat window
let height = window.innerHeight - 294

console.log(height)

const useStyles = makeStyles((theme) => ({
  // Another generic note: This style list style list originally came from the UserPlayer component and I'm editing as I go. So there's definitely unused styles here that'll eventually need pruned out.
  root: {
    marginTop: 20,
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
    width: '100%',
    height: height,
    overflowY: 'scroll',
    borderRadius: 0
  },
  top: {
    backgroundColor: '#845bb3',
    margin: 'auto',
    width: '100%',
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
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  infoContainer: {
    paddingLeft: 5,
    paddingRight: 5
  },
  content: {
    // height: 40,
    color: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
  },
  box: {
    justifyContent: 'end',
    position: 'relative',
    top: -10,
    right: '-60%',
    color: '#263238',
  },
  box2: {
    justifyContent: 'start',
    position: 'relative',
    top: -10,
    left: '-60%',
    color: '#263238',
  },
  inner: {
    padding: 5,
  },
  avatar: {
    width: 25,
    height: 25,
    fontSize: 12,
    marginRight: 5,
    marginTop: 10,
    boxShadow: theme.shadows[6],
    backgroundColor: '#263238',
    color: '#845bb3'
  },
  myselfAvatar: {
    width: 25,
    height: 25,
    fontSize: 12,
    marginLeft: 5,
    marginTop: 10,
    boxShadow: theme.shadows[6],
    backgroundColor: '#263238',
    color: '#845bb3'
  },
  room: {
    color: '#ffffff',
    letterSpacing: 2,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 20
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
  username: {
    color: '#263238',
    fontWeight: 'bolder'
  },

}))

const bubbles = {
  mine: {
    backgroundColor: '#676b93',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    color: '#ffffff',
    margin: 10,
    padding: 8,
    borderRadius: 5,
    width: '60%',
    whitespace: 'normal',
  },
  theirs: {
    backgroundColor: '#414679',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    color: '#ffffff',
    margin: 10,
    padding: 8,
    borderRadius: 5,
    width: '60%',
    whitespace: 'normal',
  }
}

const Chat = () => {
  const classes = useStyles()
  // console.log(props.room)

  const [myselfState, setMyselfState] = useState({
    myUsername: '',
    avatar: '',
    // room: ''
  })

  // console.log(myselfState.room)

  const [messageState, setMessageState] = useState({
    message: '',
    name: '',
    // room: '',
  })

  const [chatState, setChatState] = useState([])

  // To attempt chat room
  // socket.emit('joinRoom', { myselfState.myUsername, myselfState.room })

  messageState.handleInputChange = event => {
    setMessageState({ ...messageState, [event.target.name]: event.target.value })
  }

  messageState.onMessageSubmit = event => {
    event.preventDefault()

    let messageObj = {
      message: messageState.message,
      name: myselfState.myUsername,
      avatar: myselfState.avatar,
    }

    // If message is empty, end function here
    if (messageObj.message.trim() === '') {
      return
    }

    console.log(messageObj)

    socket.emit('send message', messageObj)
    setMessageState({ ...messageState, message: '' })
    socket.off('send message')



  }

  useEffect(() => {
    socket.on('recieve message', message => {
      setChatState([...chatState, message])
      console.log(message.message)
      document.getElementById('chatField').scrollTop = document.getElementById('chatField').scrollHeight
    })
  }, [chatState])

  useEffect(() => {

    // console.log(props)
    axios.get('/api/users/players', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data, props }) => {
        setMyselfState({ ...myselfState, myUsername: data.user.username, avatar: data.avatar })
        socket.emit('join', data.user.username)
        // socket.broadcast.emit('plyr chat bot', 'Someone has joined the chat!')
        socket.off('join')
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
      <Grid
        className={classes.paper}
        id="chatField"
      >


        <Grid
          container
          flexWrap="wrap"
          justify="flex-start"
          className={classes.content}
        >
          <Avatar className={classes.avatar} src="" />
          <Paper
            style={bubbles.theirs}
            variant="outlined"
            margin="dense"
          >
            Hi <span className={classes.username}>{myselfState.myUsername}!</span> Welcome to the Global Chat room!
          </Paper>
          <Box className={classes.box2} component="div">plyr chat bot</Box>
        </Grid>

        {
          chatState.map(message => (
            message.name === myselfState.myUsername ?

              // Messages from myself
              (<Grid
                container
                flexWrap="wrap"
                justify="flex-end"
                className={classes.content}
              >


                <Box className={classes.box} component="div">{message.name}</Box>
                <Paper
                  style={bubbles.mine}
                  variant="outlined"
                  margin="dense"
                >
                  {message.message}
                </Paper>
                <Avatar className={classes.myselfAvatar} src={message.avatar} />
              </Grid>) :

              // messages from everyone else
              (<Grid
                container
                flexWrap="wrap"
                justify="flex-start"
                className={classes.content}
              >
                <Avatar className={classes.avatar} src={message.avatar} />
                <Paper
                  style={bubbles.theirs}
                  variant="outlined"
                  margin="dense"
                >
                  {message.message}
                </Paper>
                <Box className={classes.box2} component="div">{message.name}</Box>
              </Grid>)
          ))
        }
      </Grid>

      {/* Bottom of chat field */}
      <Paper className={classes.bottom} elevation={5}>
        <form className={classes.message} noValidate autoComplete="off" onSubmit={messageState.onMessageSubmit}>
          <FormControl className={clsx(classes.textField)} variant="outlined">
            <OutlinedInput
              autoFocus
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
      {/* <button onClick={() => (console.log(chatState))}>Check chat state</button> */}
    </div >
  )
}
export default Chat
