import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux';

import Viewer from './screens/viewer';
import Nav from './screens/nav';
import History from './screens/history';

import store from './appStore';

var App = React.createClass({
  render: function () {
    return(
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Nav}>
            <IndexRoute component={Viewer}/>
            <Route path='/history' component={History}/>
          </Route>
        </Router>
      </Provider>
    )
  }
})

export default App;
