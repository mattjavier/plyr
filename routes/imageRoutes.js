const router = require('express').Router()
const { Image } = require('../models')
var fs = require('fs'); 
var path = require('path'); 
var multer = require('multer'); 
const { Base64 } = require('js-base64')

var storage = multer.diskStorage({ 
	destination: (req, file, cb) => { 
		cb(null, path.join(__dirname, 'uploads')) 
	}, 
	filename: (req, file, cb) => { 
		cb(null, file.fieldname + '-' + Date.now()) 
	} 
}); 

var upload = multer({ storage: storage }); 


router.get('/images', (req, res) => {
    Image.find({}, (err, items) =>{
        if (err) {
            console.log(err)
        }
        else {
            res.json(items.map(item => ({
                ...item,
                image: {
                    contentType: item.image.contentType,
                    data: Base64.fromUint8Array(new Uint8Array(item.image.data))
                }
            })))
            console.log('works')
        }
    })
})


router.post('/images', upload.single('image'), (req, res, next) => {
    console.log(req.body)
    var obj = {
    name: req.body.name,
    description: req.body.description,
    image: {
        data: fs.readFileSync(path.join(__dirname, 'uploads', req.file.filename)), 
            contentType: 'image/jpg'
     }
    }
    console.log(obj)
    Image.create(obj, (err, item) => {
        if (err) {console.log(err)}
        else {
            item.save()
            res.redirect('/api/images')
        }
    })

})

module.exports = router