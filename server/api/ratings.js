const router = require('express').Router()
const Rating = require('../db/models')

router.post('/', async (req, res, next) => {
  const userID = req.user.id
  const {rating, movieId} = req.body
  let createdRating

  const foundRating = await Rating.find({
    where: {userId: userID, movieId: movieId}
  })
  if (!foundRating) {
    let createdRating = await Rating.create({
      rating: rating,
      movieId: movieId,
      userId: userID
    })
  }
  //if you found the moving you can edit the rating
  res.send(200)
})

module.exports = router
