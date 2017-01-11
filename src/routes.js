import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// import WebFont from 'webfontloader';

// components
import Layout from './components/layout.js';

// pages
import Home from './pages/home.js';
import NotFound from './pages/notfound.js';
import SingleProject from './pages/singleProject.js';

class Routes extends React.Component {
    _handleLeave() {
        // console.log('leave ' + this.component.name)
    }
    _handleEnter() {
        // console.log('enter ' + this.component.name)
    }
    _handleChange() {
        // console.log('Change ' + this.component.name)
    }
    componentWillMount() {
        // WebFont.load({
        //     google: {
        //         families: ['Permanent Marker','Nothing You Could Do']
        //     },
        //     // typekit: {
        //     //     id: ''
        //     // }
        // });
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout} onChange={this._handleChange}>
                    <IndexRoute component={Home} onLeave={this._handleLeave} onEnter={this._handleEnter}/>
                    <Route path="/:projectSlug" component={SingleProject} onLeave={this._handleLeave} onEnter={this._handleEnter}/>
                    <Route path="*" component={NotFound} onLeave={this._handleLeave} onEnter={this._handleEnter}/>
                </Route>
            </Router>
        )
    }
}
export default Routes;
