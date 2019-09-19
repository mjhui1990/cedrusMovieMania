import React, {Component} from 'react'
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
    console.log(this.state)
    return (
      <div>
        <p>test</p>
      </div>
    )
  }
}

export default AllMoviesContainer
