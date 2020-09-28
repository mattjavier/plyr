const router = require('express').Router()
const { Image, Player } = require('../models')
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

// GET all images
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

// GET image by id
router.get('/images/:id', (req, res) => {
    Image.findById((req.params.id), (err, item) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                image: {
                    contentType: item.image.contentType,
                    data: Base64.fromUint8Array(new Uint8Array(item.image.data))
                }})
        }
    })
})


// POST image
router.post('/images', upload.single('image'), (req, res, next) => {
    console.log(req.body)
    var obj = {
    name: req.body.name,
    description: req.body.description,
    player: req.body.player,
    image: {
        data: fs.readFileSync(path.join(__dirname, 'uploads', req.file.filename)), 
            contentType: 'image/jpg'
     },
    }
    console.log(obj)
    Image.create(obj, (err, item) => {
        if (err) { console.log(err) }
        else {
            item.save()
            console.log(item._id)
            res.redirect('/api/images')
        }
    })

})

module.exports = router