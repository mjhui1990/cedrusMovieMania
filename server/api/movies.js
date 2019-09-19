const router = require('express').Router()
const {Movie} = require('../db/models')
const {getAllMovies} = require('../db/models/movie')

router.get('/', async (req, res, next) => {
  const movies = await getAllMovies()
  res.json(movies)
})

module.exports = router
