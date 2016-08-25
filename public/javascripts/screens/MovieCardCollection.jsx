import React from 'react';
import MovieCard from './MovieCard';
import _ from 'lodash';

var MovieCardCollection = React.createClass({
  render() {
    var movieCells = this.props.movies.map(function (movie) {
      return (<MovieCard movie={movie} />)
    });
    var movieRows = _.chunk(movieCells, 3);
    var rowedCells = movieRows.map(function (chunk, chunkNum) {
      return (
        <div className='columns' key={chunkNum}>
          {
            chunk.map(function (row, index) {
              return (
                <div className='column col-md-4' key={index}>{row}</div>
              )
            })
          }
        </div>
      )
    })
    return(
      <div className='container'>
        {rowedCells}
      </div>
    )
  }
})

export default MovieCardCollection;
