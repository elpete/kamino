import React, {Component} from 'react'
import {render} from 'react-dom'

import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Talent from './components/Talent'
import App from './components/App'
import Home from './components/Home'
import SpeciesSelection from './components/SpeciesSelection'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/species" component={SpeciesSelection} />
        </Route>
    </Router>
)

App.defaultProps = {
    name: 'Mike'
}

render(
    routes,
    document.getElementById('app')
)