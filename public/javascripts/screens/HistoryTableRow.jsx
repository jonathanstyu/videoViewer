import React from 'react';
import {getHistory} from '../actions';
import {connect} from 'react-redux';

var HistoryTableRow = React.createClass({
  render() {
    var movie = this.props.movie;
    return(
      <tr>
        <td>{movie.title}</td>
        <td>{movie.description}</td>
        <td><button className='btn' onClick={this.props.view}>Watch</button></td>
      </tr>
    )
  }
})

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    view: (event) => {
      dispatch({type: "OPEN_MOVIE_MODAL", movie: ownProps.movie})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTableRow);
