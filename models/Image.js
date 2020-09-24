const { model, Schema } = require('mongoose')

var ImageSchema = new Schema({ 
    name: String, 
    description: String, 
    img: 
    { 
        data: Buffer,
        contentType: String
    } 
}); 


module.exports = new model('Image', ImageSchema)
