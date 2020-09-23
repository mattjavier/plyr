const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// User registration post
router.post('/users/register', (req, res) => {
    const { name, username, email, password } = req.body
    User.register(new User({ name, username, email }), password, err => {
        if (err) { console.log(err) }
        res.sendStatus(200)
    })
})

// User login route
router.post('/users/login', (req, res) => {
    const { username, password } = req.body
    User.authenticate()(username, password, (err, user) => {
        if (err) { console.log(err) }
        res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
    })
})

// User get players locked behind token login
router.get('/users', passport.authenticate('jwt'), (req, res) => {
    res.json(req.user)
})

// User put for updating username, email, or password reset
router.put('users/:id', passport.authenticate('jwt'), (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

// Delete user for testing. Will be locked later
router.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => {
            res.sendStatus(200)
            console.log(`${user} deleted`)
        })
        .catch(err => console.log(err))
})



module.exports = router