import React from 'react';
import 'whatwg-fetch';
import MovieCardCollection from './MovieCardCollection';
import {connect} from 'react-redux';
import {getMovies} from '../actions';
import VideoModal from './VideoModal';

var Viewer = React.createClass({
  componentWillMount() {
    if (this.props.movies.length === 0) {
      this.props.dispatch(getMovies())
    }
  },

  render() {
    return (
      <div>
        <h3>Viewer</h3>
        <hr/>
        <MovieCardCollection movies={this.props.movies}/>
        <VideoModal />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
