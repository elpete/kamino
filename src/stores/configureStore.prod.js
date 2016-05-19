import { createStore, applyMiddleware, compose } from 'redux'
import {routerReducer} from 'react-router-redux'
// import rootReducer from '../reducers'

const reducers = combineReducers({
    routing: routerReducer
})

const enhancers = compose()

export default function configureStore(initialState) {
    return createStore(reducers, initialState, enhancers)
}