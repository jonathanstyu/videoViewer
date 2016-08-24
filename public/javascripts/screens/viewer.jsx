import React from 'react';
import 'whatwg-fetch';
import MovieCard from './movieCard';

var Viewer = React.createClass({
  getInitialState() {
    var movies = [];
    return ({
      movies: []
    })
  },

  componentDidMount() {
    this.getMovies()
  },

  getMovies() {
    var that = this;
    fetch('https://demo2697834.mockable.io/movies', {
      method: 'get'
    }).then(function (response) {
      return response.json()
    }).then(function (json) {
      var movies = json.entries.map(function (entry) {
        return {
          title: entry.title,
          description: entry.description,
          headerImage: entry.images[0].url
        }
      });
      that.setState({
        movies: movies
      })
    }).catch(function (error) {
      console.log(error.message);
    })
  },

  render() {
    return (
      <div>
        <h3>Viewer</h3>
        {this.state.movies.map(function (movie, index) {
          return <MovieCard movie={movie} key={index}/>
        })}
      </div>
    )
  }
})

export default Viewer;
