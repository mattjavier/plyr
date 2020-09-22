const router = require('express').Router()
const { User } = require('../models')

router.get('/users', (req, res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

router.post('/users', (req, res) => {

})

router.put('/users/:id', (req, res) => {
    
})

router.delete('/users/:id', (req, res) => {
    
})


module.exports = router