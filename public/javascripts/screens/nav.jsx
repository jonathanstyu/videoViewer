import React from 'react';

var Nav = React.createClass({
  render() {
    return (
      <div>
        <header className='navbar'>
          <section className='navbar-section'>
            <a href='#' className='navbar-brand'>VideoViewer</a>
            <a href='#/history' className='btn btn-link'>History</a>
          </section>
        </header>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default Nav;
