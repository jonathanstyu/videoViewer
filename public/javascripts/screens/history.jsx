import React from 'react';
import {getHistory} from '../actions';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import VideoModal from './VideoModal';
import HistoryTableRow from './HistoryTableRow';

var History = React.createClass({
  componentDidMount() {
    this.props.dispatch(getHistory());
  },

  render() {
    var content;
    if (this.props.movieHistory.length === 0) {
      content = (
        <div className='centered'>
          <p className='empty-title'>History is Empty</p>
          <p className='empty-meta'>You should go watch some stuff.</p>
          <a href='/#/' className='btn empty-action'>Go to Views</a>
        </div>
      )
    } else {
      var boundView = this.props.view;
      content = (
        <table className='table'>
          <tbody>
            <tr>
              <th>Movie Title</th>
              <th>Movie Description</th>
              <th>Actions</th>
            </tr>
            {
              this.props.movieHistory.map(function (movie, index) {
                return (
                  <HistoryTableRow movie={movie} key={index}/>
                )
              })
            }
          </tbody>
        </table>
      )
    }
    return (
      <div>
        <h3>History</h3>
        <hr/>
        {content}
        <VideoModal />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    movieHistory: state.history
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
