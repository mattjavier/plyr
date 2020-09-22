const router = require('express').Router()
const { Player, User } = require('../models')


router.get('/players', (req, res) => {
    Player.find()
    .then(player => res.json(player))
    .catch(err => console.error(err))
})

router.post('/players', (req,res)=> {
    Player.create(req.body)
    .then(player => res.json(user))
    .catch(err => console.error(err))
})

module.exports= router