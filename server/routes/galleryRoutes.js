const router = require('express').Router()
const galleryController = require('../controllers/galleryController')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')

router.get('/', galleryController.getAllGallery)
router.get('/albums', galleryController.getAllAlbum)
router.get('/albums/:albumId', galleryController.getPhotoByAlbumId)
router.get('/:id', galleryController.getPhotoById)

router.use(authenticate)
router.use(authorize)
router.put('/:id', galleryController.updatePhotoById)
router.delete('/:id', galleryController.deletePhotoById)
router.post('/', galleryController.createPhoto)

module.exports = router