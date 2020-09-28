const router = require('express').Router()
const { Player, User } = require('../models')

router.get('/players', (req, res) => {
    Player.find()
    .populate('user')
    .then(players => res.json(players))
    .catch(err => console.error(err))
})

// router.get('/players/match', (req, res) => {
//     Player.find({ competetive: false })
//      .then(players => res.json(players))
//      .catch(err => console.log(err))
 
//  })

router.get('/players/:id', (req, res) => {
    Player.findById(req.params.id)
    .then(player => res.json(player))
    .catch(err => console.log(err))
})

router.post('/players', (req,res)=> {
    Player.create(req.body)
    .then(player => User.findByIdAndUpdate(req.body.user, { $push: {player_profile: player.id }}))
    .then(players => res.json(players))
    .catch(err => console.error(err))
})

router.put('/players/:id', (req, res) => {
    Player.findByIdAndUpdate(req.params.id, req.body)
    .then(players => res.json(players))
    .catch(err => console.error(err))
})


router.delete('/players/:id', (req, res) => {
    Player.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})
module.exports= router