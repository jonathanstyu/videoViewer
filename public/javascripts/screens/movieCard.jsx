import React from 'react';
import {connect} from 'react-redux';

var MovieCard = React.createClass({
  render() {
    var movie = this.props.movie;
    return(
      <div className='card'>
        <div className='card-image'>
          <img src={movie.headerImage} className='img-responsive'/>
        </div>
        <div className="card-header">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-meta">{new Date(movie.publishedDate).toString()}</h6>
        </div>
        <div className="card-body">{movie.description}</div>
        <div className="card-footer">
            <div className='btn-group'>
              <button className="btn btn-primary" id={movie.id} onClick={this.props.view}>View</button>
              <button className="btn btn-primary" id={movie.id} onClick={this.props.save}>Save</button>
            </div>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    view: (event) => {
      dispatch({type: "OPEN_MOVIE_MODAL", id: event.target.id})
    },
    save: (event) => {
      dispatch({type: "SAVE_MOVIE", id: event.target.id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
