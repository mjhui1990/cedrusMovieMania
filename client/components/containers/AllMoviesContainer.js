import React, {Component} from 'react'
import AllMoviesView from '../views/AllMoviesView'
import axios from 'axios'

class AllMoviesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMovies: []
    }
  }

  async componentDidMount() {
    const allMovies = await axios.get('/api/movies').then(res => res.data)
    this.setState({allMovies})
  }

  render() {
    return (
      <div>
        <AllMoviesView allMovies={this.state.allMovies} />
      </div>
    )
  }
}

export default AllMoviesContainer
