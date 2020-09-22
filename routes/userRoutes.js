const router = require('express').Router()
const { User } = require('../models')
//passport if we use it goes here
//this file will be user login/registration routes if we decide on passport


router.get('/users', (req, res) => {
    User.find()
    .populate('player_profile')
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

router.post('/users', (req,res)=> {
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

router.put('/users/:id', (req, res) => {
    
})

router.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router