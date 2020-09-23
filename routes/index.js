const router = require('express').Router()

// connect your routes files here...

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./messageRoutes.js'))
router.use('/api', require('./playerRoutes.js'))
router.use('/api', require('./rawgRoutes.js'))

module.exports = router
