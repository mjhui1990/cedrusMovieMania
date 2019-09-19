const db = require('../db')
const Sequelize = require('sequelize')

var Rating = db.define('rating', {
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      max: 5,
      min: 0
    },
    defaultValue: 0
  }
})

module.exports = Rating
