import React from 'react';
import {connect} from 'react-redux';

var MovieCard = React.createClass({
  render() {
    var movie = this.props.movie;
    return(
      <div className='panel panel-primary animated fadeIn horizontal-card'>
        <div className="panel-heading">
          <h4 className="panel-title">{movie.title}</h4>
        </div>
        <div>
          <img src={movie.headerImage} onClick={this.props.view} style={styles.imageCard} />
        </div>
      </div>
    )
  }
})

const styles = {
  imageCard: {
    width: "100%"
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    view: (event) => {
      dispatch({type: "OPEN_MOVIE_MODAL", movie: ownProps.movie})
    },
    save: (event) => {
      dispatch({type: "SAVE_MOVIE", id: event.target.id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
