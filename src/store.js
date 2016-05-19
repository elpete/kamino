import configureStore from './stores/configureStore'
import {hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

const initialState = {}

const store = configureStore(initialState)

export const history = syncHistoryWithStore(hashHistory, store)

export default store