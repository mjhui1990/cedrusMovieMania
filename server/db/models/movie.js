const db = require('../db')
const Sequelize = require('sequelize')

var Movie = db.define('movie', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  posterURL: {
    type: Sequelize.STRING
  }
})

const getAllMovies = async () => {
  const allMovies = await Movie.findAll()
  return allMovies
}

module.exports = {
  Movie,
  getAllMovies
}
