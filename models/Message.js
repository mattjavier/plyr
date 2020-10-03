const { model, Schema } = require('mongoose')

const Message = new Schema({
  room: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })


module.exports = model('Message', Message)