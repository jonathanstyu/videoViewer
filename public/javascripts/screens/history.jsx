import React from 'react';
import {getHistory} from '../actions';
import {connect} from 'react-redux';
import MovieCard from './movieCard';

var History = React.createClass({
  componentDidMount() {
    this.props.dispatch(getHistory());
  },

  render() {
    var content;
    if (this.props.history.length === 0) {
      content = (
        <div className='centered'>
          <p className='empty-title'>History is Empty</p>
          <p className='empty-meta'>You should go watch some stuff.</p>
          <a href='/' className='btn empty-action'>Go to Views</a>
        </div>
      )
    } else {
      content = this.props.history.map(function (movie) {
        <MovieCard movie={movie}/>
      })
    }
    return (
      <div>
        <h3>History</h3>
        <hr/>
        {content}
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    history: state.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
