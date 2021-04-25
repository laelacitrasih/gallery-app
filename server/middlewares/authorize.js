const {user} = require('../models')
const authorize = function authorization(req, res, next) {
    try {
        //check to the data base
        const foundUser = user.findOne({where: {email: req.decoded.email}})
        if (foundUser){
            next()
        } else {
            throw {name: 'CustomError', msg:'Not Authorized', status: 401}
        }
    } catch (error) {
        // console.log(error, '----authorize')
        next(error)
    }
}

module.exports = authorize