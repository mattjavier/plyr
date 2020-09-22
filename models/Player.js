const { model, Schema } = require('mongoose')

const Player = new Schema({
  avatar: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  systems: {
    type: String,
    required: false
  },
  games: {
    type: String,
    required: false
  },
  genres: {
    type: String,
    required: false
  },
  competetive: {
    type: Boolean,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
  //   messages: [{
  //       type: Schema.Types.ObjectId,
  //       ref: 'Message'
  //   }]
}, { timestamps: true })

module.exports = model('Player', Player)

//Do we want to have separate models and make relations or try to fit everything into one model?

// systems they play, games, genre, discord, avatar, casual/comp
//bio