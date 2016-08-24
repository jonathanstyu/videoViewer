import React from 'react';

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
          <h6 className="card-meta">Movie</h6>
        </div>
        <div className="card-body">{movie.description}</div>
        <div className="card-footer">
            <div className='btn-group btn-group-block'>
              <button className="btn btn-primary">Do</button>
              <button className="btn btn-primary">Do More</button>
            </div>
        </div>
      </div>
    )
  }
})

export default MovieCard;
