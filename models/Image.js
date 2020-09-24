const { model, Schema } = require('mongoose')

var ImageSchema = new Schema({ 
    name: String, 
    desc: String, 
    img: 
    { 
        data: Buffer, 
        type: String 
    } 
}); 


module.exports = new model('Image', ImageSchema)
