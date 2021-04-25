const { gallery } = require('../models')

class GalleryController {
  //all photos group by albumId
  static async getAllGallery(req, res, next) {
    try {
      const galleries = await gallery.findAll(
        {
          attributes: {
            exclude: ['updatedAt', 'createdAt']
          }
        }
      )
      res.status(200).json(galleries)
    } catch (error) {
      next(error)
    }
  }

  // get all (list) albumId
  static async getAllAlbum(req, res, next) {
    try {
      const galleries = await gallery.findAll({
        attributes: ['albumId'],
        group: ['albumId'],
      })
      res.status(200).json(galleries)
    } catch (error) {
      next(error)
    }
  }

  // get photo by albumId
  static async getPhotoByAlbumId(req, res, next) {
    try {
      const { albumId } = req.params
      const galleries = await gallery.findAll(
        {
          attributes: {
            exclude: ['updatedAt', 'createdAt']
          },
          where: {
            albumId: albumId
          }
        }
      )
      res.status(200).json(galleries)
    } catch (error) {
      next(error)
    }
  }

  // get photo by id
  static async getPhotoById(req, res, next) {
    try {
      const { id } = req.params
      const photo = await gallery.findByPk(id)
      if (!photo) throw { name: "CustomError", msg: 'Data not found', status: 400 }
      res.status(200).json(photo)
    } catch (error) {
      next(error)
    }
  }

  static async updatePhotoById(req, res, next) {
    try {
      let { albumId, title, url, thumbnailUrl } = req.body
      albumId = +albumId
      const { id } = req.params
      const updatePhoto = await gallery.update({
        albumId, title, url, thumbnailUrl
      }, {
        where: { id: +id }
      })
      res.status(200).json({ id: +id, message: 'photo successfully updated' })
    } catch (error) {
      next(error)
    }
  }

  static async deletePhotoById(req, res, next) {
    try {
      const { id } = req.params
      const deletePhoto = await gallery.destroy({
        where: { id: +id }
      })
      res.status(200).json({ id: +id, message: 'photo successfully deleted' })
    } catch (error) {
      next(error)
    }
  }

  static async createPhoto(req, res, next) {
    try {
      let { albumId, title, url, thumbnailUrl } = req.body
      albumId = +albumId
      const createPhoto = await gallery.create({
        albumId, title, url, thumbnailUrl
      })
      res.status(200).json(createPhoto)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = GalleryController