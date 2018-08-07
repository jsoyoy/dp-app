import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Home from '../page/Home'
import City from '../page/City'


class RouterMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/">
          <IndexRoute component={Home}/>
          <Route path='/city' component={City}/>
        </Route>
      </Router>
    )
  }
}

export default RouterMap