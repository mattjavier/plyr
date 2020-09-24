// npm that reads the .env file for the SECRET in passport
require('dotenv').config()

const express = require('express')
const { join } = require('path')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const { User } = require('./models')

const app = express()

// Image npms
const bodyParser = require('body-parser')
var Image = require('./models')
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'client', 'build')))
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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
