import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import _ from 'lodash';
import {updateHistory} from '../actions'

var VideoModal = React.createClass({
  playVideo(event) {
    this.props.dispatch(updateHistory(this.props.movie))
  },

  render() {
    return (
      <Modal
        isOpen={this.props.modalOpen}
        onRequestClose={this.props.closeModal}
        >
        <div>
          <header className='navbar'>
            <section className='navbar-section'>
              <h4>Watching {this.props.movie.title || "..."}</h4>
              <button onClick={this.props.closeModal} className='btn'>Close</button>
            </section>
          </header>
          <hr />
          <video type='video/mp4' controls onPlay={this.playVideo}>
            <source src={this.props.movie.videoURL}/>
            Your browser does not support video.
          </video>
        </div>
      </Modal>
    )
  }
})

const mapStateToProps = (state) => {
  var currentlyWatchingMovie = _.find(state.movies, function (movie) {
    return movie.id === state.currentlyWatching
  })
  return {
    modalOpen: state.modalOpen,
    movie: currentlyWatchingMovie || ""
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({type: "CLOSE_VIDEO_MODAL"})
    },
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoModal);
