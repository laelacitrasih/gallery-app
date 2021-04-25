const router = require('express').Router()
const userRouters = require('./userRoutes')
const galleryRouters = require('./galleryRoutes')

router.use('/users', userRouters)
router.use('/galleries', galleryRouters)

module.exports = router