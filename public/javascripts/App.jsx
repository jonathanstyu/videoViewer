import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'

import Viewer from './screens/viewer';
import Nav from './screens/nav';
import History from './screens/history';

var App = React.createClass({
  getInitialState: function () {
    return ({
      hello: true
    })
  },

  render: function () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Nav}>
          <IndexRoute component={Viewer}/>
          <Route path='/history' component={History}/>
        </Route>
      </Router>
    )
  }
})

export default App;
