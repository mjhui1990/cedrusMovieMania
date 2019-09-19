import React from 'react'
import {Card, CardHeader, CardMedia} from '@material-ui/core'
import generateMovieCards from './helperViews/generateMovieCards'

const AllMovieView = props => {
  console.log(props.allMovies)
  const cards = props ? generateMovieCards(props.allMovies) : null
  return <div>{cards}</div>
}

export default AllMovieView
