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
    image: {
        data: Buffer,
        contentType: String
        
    },
    playerId: {
        type: String,
        
    }
}, { timestamps: true })


module.exports = model('Image', Image)