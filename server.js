// npm that reads the .env file for the SECRET in passport
require('dotenv').config()

const express = require('express')
const { join } = require('path')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const { User } = require('./models')
var bodyParser = require('body-parser')

const app = express()


// Socket.io server stuff
const socketio = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const io = socketio(server)

// Socket connection functions
io.on('connection', socket => {
  console.log(`Socket.io is running on port 3002`)
  // Recieve message from front end then send same message to everyone
  socket.on('message', ({name, message}) => {
    io.emit('message', {name, message})
  })

  socket.on('button clicked', () => {
    console.log('front end button clicked')
  })

  // socket.on('chatMessage', ({from, fromId, to, toId, message}) => {
  //   console.log(`Sending to ${toId}`)
  //   io.emit(toId, {from, fromId, to, toId, message})
  // })

})

// Host socket server on process.env.PORT or 3002
server.listen(process.env.PORT || 3002)


// Image npms
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'client', 'build')))
}

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Passport stuff
app.use(passport.initialize())
app.use(passport.session())

passport.use(new Strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findById(id)
  .then(user => cb(null, user))
  .catch(err => cb(err))))


app.use(require('./routes'))

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
  })
}

require('./db')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.log(err))
