import React from 'react'
import ReactCreateClass from 'create-react-class'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './utils/store'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SingleProject from './pages/SingleProject'

const Routes = ReactCreateClass({
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects/:projectSlug" component={SingleProject} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Provider>
      </BrowserRouter>
    )
  },
})
export default Routes
