const { model, Schema } = require('mongoose')

const Player = new Schema({
  avatar: {
    // type: Schema.Types.ObjectId,
    // ref: 'Image',
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  systems: {
    type: Array,
    required: false
  },
  games: {
    type: Array,
    required: false
  },
  genres: {
    type: Array,
    required: false
  },
  competetive: {
    type: Boolean,
    required: false
  },
  discord:{
    type: String,
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