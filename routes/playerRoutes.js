const router = require('express').Router()
const { Player, User } = require('../models')


router.get('/players', (req, res) => {
    Player.find()
    .then(player => res.json(player))
    .catch(err => console.error(err))
})

module.exports= router