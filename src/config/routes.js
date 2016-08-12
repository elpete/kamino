import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from '../components/App'
import Home from '../components/Home'
import PlayerNameEntry from '../components/PlayerNameEntry'
import SpeciesSelection from '../components/SpeciesSelection'
import CareerSelection from '../components/CareerSelection'
import InitialSkillSelection from '../components/InitialSkillSelection'
import InitialSpendXP from '../components/InitialSpendXP'

const routes = (
    <Router history = {hashHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path = "/user" component = {PlayerNameEntry} />
            <Route path = "/species" component = {SpeciesSelection} />
            <Route path = "/career" component = {CareerSelection} />
            <Route path = "/initialSkills" component = {InitialSkillSelection} />
            <route path = "/initialSpendXP" component = {InitialSpendXP} />
        </Route>
    </Router>
)

export default routes