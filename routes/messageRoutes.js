const router = require('express').Router()
const { Message, User} = require('../models')
const { post } = require('./userRoutes')

router.get('/messages', (req, res) => {
    Message.find()
    .populate('sender')
    .then(messages => res.json(messages))
    .catch(err => console.error(err))
})

router.post('/messages', (req, res) => {
    Message.create(req.body)
    .then(post => User.findByIdAndUpdate(req.body.sender, {$push: {messages: message._id}}))
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// router.put('/messages/:id', (req, res) => {
    
// })

// router.delete('/messages/:id', (req, res) => {
    
// }) don't think I need these functionality 

module.exports = router