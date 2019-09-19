import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'

const generateMovieCards = movies => {
  return movies.map(movie => {
    return (
      <Card style={{maxWidth: 345, marginBottom: 12}} key={movie.id}>
        <CardHeader title={movie.name} />
        <CardMedia
          style={{height: 0, paddingTop: '56%'}}
          image={movie.posterURL}
          title="Paella dish"
        />
        <CardContent>
          <Typography>Genre: {movie.genre}</Typography>
          <Typography>Description: {movie.description}</Typography>
        </CardContent>
      </Card>
    )
  })
}

export default generateMovieCards
