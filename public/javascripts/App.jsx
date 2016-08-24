import React from 'react'; 

var App = React.createClass({
  getInitialState: function () {
    return ({
      hello: true
    })
  },

  render: function () {
    return(
      <div><p>hello</p></div>
    )
  }
})

export default App;
