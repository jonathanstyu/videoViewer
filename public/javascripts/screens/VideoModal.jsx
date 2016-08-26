import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import _ from 'lodash';
import {updateHistory} from '../actions'
import Movie from '../movie'

var VideoModal = React.createClass({
  playVideo(event) {
    this.props.dispatch(updateHistory(this.props.movie))
  },

  render() {
    return (
      <Modal
        isOpen={this.props.modalOpen}
        onRequestClose={this.props.closeModal}
        onKeyDown={this.key}
        >
        <div>
          <header className='navbar'>
            <section className='navbar-section'>
              <h4>Watching {this.props.movie.title || "..."}</h4>
              <button onClick={this.props.closeModal} className='btn'>Close</button>
            </section>
          </header>
          <hr />
          <video type='video/mp4' controls onPlay={this.playVideo} style={styles.video}>
            <source src={this.props.movie.videoURL}/>
            Your browser does not support video.
          </video>
          <h6>Description:</h6>
          <p>{this.props.movie.description}</p>
        </div>
      </Modal>
    )
  }
})

const styles = {
  video: {
    width: '100%'
  }
}

const mapStateToProps = (state) => {
  var movie = typeof state.currentlyWatching !== 'undefined' ? state.currentlyWatching : new Movie()
  return {
    modalOpen: state.modalOpen,
    movie: state.currentlyWatching
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
