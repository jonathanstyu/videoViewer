import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import _ from 'lodash';
import {updateHistory} from '../actions'
import Movie from '../movie'

var TableModal = React.createClass({
  render() {
    return (
      <Modal
        isOpen={this.props.modalOpen}
        onRequestClose={this.props.closeModal}
        >
        <div>
          <header className='navbar'>
            <section className='navbar-section'>
              <h4>{this.props.tabling}</h4>
              <button onClick={this.props.closeModal} className='btn'>Close</button>
            </section>
          </header>
          <hr />
          <table className='table table-striped'>
            <tbody>
              <tr>
                <td>Title</td>
                <td>Description</td>
              </tr>
              {
                this.props.filteredMovies.map(function (movie, index) {
                  return (
                    <tr key={index}>
                      <td>{movie.title}</td>
                      <td>{movie.description}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </Modal>
    )
  }
})

const mapStateToProps = (state) => {
  var filteredMovies = [];
  var variable;
  if (typeof state.tablingType !== 'undefined') {
    variable = 'categories';
  } else {
    variable = state.tablingType;
  }
  for (var i = 0; i < state.allMovies.length; i++) {
    for (var z = 0; z < state.allMovies[i][variable].length; z++) {
      if (state.allMovies[i][variable][z].title === state.tabling) {
        filteredMovies.push(state.allMovies[i])
      }
    }
  }

  return {
    modalOpen: state.tableModalOpen,
    tabling: state.tabling,
    tablingType: state.tablingType,
    filteredMovies: filteredMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch({type: "CLOSE_TABLE_MODAL"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableModal);
