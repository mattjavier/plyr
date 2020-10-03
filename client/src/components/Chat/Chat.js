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


// Connects to server 3002 where socket is run
const socket = io.connect('http://localhost:3002')

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
    height: 500,
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
    height: 40,
    color: '#ffffff'
    // IDK where to put this note, so I Figure here's as good as anywhere. I want to try to use clsx to assign classes conditionally to the messages' background colors...one for messages from you, another from messages from other users. Maybe primary for everyone else and secondary for from yourself?? IDK.
  },
  inner: {
    padding: 5,
  },
  avatar: {
    width: 25,
    height: 25,
    fontSize: 12,
    marginRight: 10,
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
  username: {
    color: '#263238',
    fontWeight: 'bolder'
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

const Chat = () => {
  const classes = useStyles()

  const [myselfState, setMyselfState] = useState({
    myUsername: '',
    avatar: '',
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
    let messageObj = {
      message: messageState.message,
      name: myselfState.myUsername,
      avatar: myselfState.avatar,
    }

    console.log(messageObj)

    socket.emit('message', messageObj)
    setMessageState({ ...messageState, message: '' })
    console.log(event.target)
  }

  // listens to server 3002 to recieve 'message'
  socket.on('message', ({name, message, avatar}) => {
    setChatState([...chatState, { name, message, avatar }])
  })

  useEffect(() => {
    axios.get('/api/users/players', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data }) => {
        //console.log(data)
        setMyselfState({ ...myselfState, myUsername: data.user.username, avatar: data.avatar })
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
      {/* <Paper className={classes.paper}>
        <div className={classes.content}>Welcome to Global Chat</div>
        {
          chatState.map(message => {
            (message.name === myselfState.myUsername ?
              (<Paper className={classes.myContent} elevation={5}>
      
                {message.name}: {message.message}
              </Paper>)
              :
              (<Paper className={classes.notMyContent} elevation={5}>
           
                {message.name}: {message.message}
              </Paper>))
          })
        }
      </Paper>  */}
      <Grid
        className={classes.paper}
      >
        <Grid 
          item
          flexWrap="wrap" 
          className={classes.content}
        >
          Welcome to the Global Chat room!
        </Grid>
        {
          chatState.map(message => 
            <Grid 
              container
              flexWrap="wrap"
              justify="flex-start"
              alignItems="center"
              className={classes.content}
            >
              <Avatar className={classes.avatar} src={message.avatar} />
              <span>
                <span className={classes.username}>{message.name}:
                </span> {message.message}
              </span>
            </Grid>
          )
        }
      </Grid>

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
    </div>
  )
}
export default Chat
