import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import {history} from '../store'

import App from '../components/App'
import Home from '../components/Home'
import Kamino from '../components/Kamino'
import UserNameEntry from '../components/UserNameEntry'
import SpeciesSelection from '../components/SpeciesSelection'
import CareerSelection from '../components/CareerSelection'

const routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/user" component={UserNameEntry} />
            <Route path="/species" component={SpeciesSelection} />
            <Route path="/career" component={CareerSelection} />
        </Route>
    </Router>
)

export default routes