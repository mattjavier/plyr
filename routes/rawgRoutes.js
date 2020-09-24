const router = require('express').Router()
const axios = require('axios')
const { User, Player, Message } = require('../models')

// router.get('/games/:search', (req, res) => {
//     axios.get(`https://api.rawg.io/api/games?search=${req.params.search}`)
//         .then(({ data }) => data.Search.map(games => ({
//             title: results.name
//         }))
//         // .then(games => res.json(games))
//         .catch(err => console.log(err))
// )})

router.get('/games/:search', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?search=${req.params.search}`)
        .then(({ data }) => {
            console.log(data)
            res.json(data)
        })
        .catch(err => console.log(err))
})


module.exports = router