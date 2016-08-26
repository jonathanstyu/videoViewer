import React from 'react';
import 'whatwg-fetch';
import {connect} from 'react-redux';
import {getMovies} from '../actions';
import VideoModal from './VideoModal';
import MovieCard from './MovieCard';

var Viewer = React.createClass({
  componentWillMount() {
    if (this.props.movies.length === 0) {
      this.props.dispatch(getMovies())
    }
  },

  handleKeyPress(event) {
    console.log(event.keyCode);
  },

  render() {
    return (
      <div className='container-fluid'>
        <h3>Viewer</h3>
        <hr/>
        <div id='carousel-horizontal'>
          {
            this.props.movies.map(function (movie, index) {
              return <MovieCard movie={movie} key={index}/>
            })
          }
        </div>
        <VideoModal />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  if (state.searchString === "") {
    return {
      movies: state.allMovies
    }
  } else {
    var filteredMovies = state.allMovies.filter(function (movie) {
      if (movie.title.toLowerCase().indexOf(state.searchString) >= 0 || movie.description.toLowerCase().indexOf(state.searchString) >= 0) {
        return true
      } else {
        return false
      }
    })
    return {
      movies: filteredMovies
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
