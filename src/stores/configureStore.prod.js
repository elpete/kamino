import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'

const enhancers = compose()

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancers)
}