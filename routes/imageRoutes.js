const router = require('express').Router()
const { Image } = require('../models')
const fs = require('fs')
const { join } = require('path')

// Image upload crap
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cd) {
        const uploadsDir = join(__dirname, '..', 'uploads', `${Date.now()}`)
        fs.mkdirSync(uploadsDir)
        cb(null, uploadsDir)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage });



// Actual routes
router.get('/images', (req, res) => {
    Image.find()
        .then(item => {
            res.json(item)
        })
        .catch(err => { console.log(err) })
})

router.post('/images', upload.single('image'), (req, res, next) => {

    var obj = {
        name: req.body.name,
        description: req.body.description,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save(); 
            res.json(item)
        }
    });
});

module.exports = router