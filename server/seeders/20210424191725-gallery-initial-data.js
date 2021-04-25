'use strict';

const axios = require('axios');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let galleries = []
    await axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        galleries = response.data
        console.log(galleries, '----executed result')
      })
      .catch(err => {
        console.log(err)
      })
    galleries.map(gallery => {
      gallery.createdAt = new Date()
      gallery.updatedAt = new Date()
      return gallery
    })
    // console.log(galleries)
    await queryInterface.bulkInsert('galleries', galleries, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('galleries', null, {})
  }
};
