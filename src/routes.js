import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import Layout from './components/Layout'

// pages
import Home from './pages/Home'
import NotFound from './pages/Notfound'
import SingleProject from './pages/SingleProject'

const Routes = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:projectSlug" component={SingleProject} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  },
})
export default Routes
