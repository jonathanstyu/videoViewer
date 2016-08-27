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
    var that = this;
    var categories;
    if (this.props.movie.categories) {
      categories = (
        <div className='row'>
          <h4>
            {
              this.props.movie.categories.map(function (category, index) {
                return (<span className="label label-primary"  key={index} onClick={that.props.selectCategory} id={category.title}>{category.title}</span>)
              })
            }
          </h4>
        </div>
      )
    }

    var credits;
    if (this.props.movie.credits) {
      credits = (
        <table className='table'>
          <tbody>
            <tr>
              <th>Role</th>
              <th>Name</th>
            </tr>
            {
              this.props.movie.credits.map(function (credit, index) {
                return(
                  <tr key={index}>
                    <td>{credit.role === "Director" ? "Director" : "Actor"}</td>
                    <td><a onClick={that.props.selectCredit} id={credit.name}>{credit.name}</a></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      )
    }

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
          <div className='container-fluid'>
            <h6>Description:</h6>
            <p>{this.props.movie.description}</p>
            {categories}
            <hr/>
            {credits}
          </div>
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
    modalOpen: state.videoModalOpen,
    movie: state.currentlyWatching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({type: "CLOSE_VIDEO_MODAL"})
    },
    selectCredit: (event) => {
      dispatch({type: "SELECT_CREDIT", value: event.target.id})
    },
    selectCategory: (event) => {
      dispatch({type: "SELECT_CATEGORY", value: event.target.id})
    },
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoModal);
