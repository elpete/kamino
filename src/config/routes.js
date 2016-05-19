import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import {history} from '../store'

import App from '../components/App'
import Home from '../components/Home'
import SpeciesSelection from '../components/SpeciesSelection'

const routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/species" component={SpeciesSelection} />
        </Route>
    </Router>
)

export default routes