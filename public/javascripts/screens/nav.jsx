import React from 'react';
import {connect} from 'react-redux';

var Nav = React.createClass({
  render() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <a href='#/' className='navbar-brand'>VideoViewer</a>
            </div>
            <ul className='nav navbar-nav'>
              <li><a href='#/history'>History</a></li>
            </ul>
            <form className='navbar-form navbar-right'>
              <div>
                <input type='text' className='form-control' placeholder='Search Title / Description' onChange={this.props.updateSearchString} />
              </div>
            </form>
          </div>
        </nav>
        <div className='row'>
          {this.props.children}
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
    updateSearchString: (event) => {
      dispatch({type: "UPDATE_SEARCH_STRING", value: event.target.value})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
