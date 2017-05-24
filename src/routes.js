import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/store'

// components
import Layout from './components/Layout'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SingleProject from './pages/SingleProject'

const Routes = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/:projectSlug" component={SingleProject} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </Provider>
      </BrowserRouter>
    )
  },
})
export default Routes
