import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// components
import Layout from './components/layout.js'

// pages
import Home from './pages/home.js'
import NotFound from './pages/notfound.js'
import SingleProject from './pages/singleProject.js'

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout} onChange={this._handleChange}>
          <IndexRoute component={Home} />
          <Route path="/:projectSlug" component={SingleProject} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    )
  }
}
export default Routes
