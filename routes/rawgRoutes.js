const router = require('express').Router()
const axios = require('axios')
const { User, Player, Message } = require('../models')

router.get('/games/:search', (req, res) => {
    axios.get(`https://api.rawg.io/api/games?page_size=1&search=${req.params.search}`)
        .then(({ data }) => res.json(data)
        // .then(games => res.json(games))
        
        .catch(err => console.log(err))
)})



module.exports = router

  
