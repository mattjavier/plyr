const { model, Schema } = require('mongoose')

const Image = new Schema({
    name: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    player: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    image: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true })


module.exports = model('Image', Image)