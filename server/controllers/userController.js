const {user} = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body
      const newUser = await user.create({ username, email, password })
      res.status(201).json({ id: newUser.id, username: newUser.username, email: newUser.email })
      next()
    } catch (error) {
      // console.log(error)
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      const userLogin = await user.findOne({ where: { email: email } })

      if (!userLogin) throw { name: "CustomError", msg: 'Invalid email or password', status: 400 }

      const comparedPassword = await comparePassword(password, userLogin.password)
      if (!comparedPassword) throw { name: "CustomError", msg: 'Invalid email or password', status: 400 }

      const access_token = await generateToken({ id: userLogin.id, email: userLogin.email, username: userLogin.username })
      res.status(200).json({ access_token: access_token, username: userLogin.username })
      next()
    } catch (error) {
      // console.log(error)
      next(error)
    }

  }
}

module.exports = UserController