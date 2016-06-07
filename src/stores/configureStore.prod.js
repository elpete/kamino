import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from '../reducers'

const reducers = combineReducers({

})

const enhancers = compose()

export default function configureStore(initialState) {
    return createStore(reducers, initialState, enhancers)
}