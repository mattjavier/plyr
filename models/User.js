const { model, Schema } = require('mongoose')

const User = new Schema ({
name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  player_profile: [{
      type: Schema.Types.ObjectId,
      ref: 'Player'
  }]
}, { timestamps: true })

module.exports = model('User', User)


// Navbar
// Footer
// Player
// Avatar (implements avatar editor and file upload)
// View Profile (uses Player component)
// Edit Profile (uses Player component)
// Login Form
// Register Form
// Matches List
// Match
// Profile Builder Modal/Page
// Selection cards (for profile builder)