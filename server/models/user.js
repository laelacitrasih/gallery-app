'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'username cannot be null'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail:{
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      is: /^[0-9a-f]{64}$/i,
      validate: {
        len: {
          args: [6,64],
          msg: 'password must be strong password'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'user',
    hooks:{
      beforeCreate(user, option){
        user.password = hashPassword(user.password)
      }
    }
  });
  return user;
};