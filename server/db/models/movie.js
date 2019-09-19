const db = require('../db')

const Sequelize = require('sequelize')

const Movie = db.define('movie', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  Genre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  posterURL: {
    type: Sequelize.STRING
  }
})

module.exports = Movie
