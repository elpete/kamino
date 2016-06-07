import {createStore, applyMiddleware, compose} from 'redux'
import {persistState} from 'redux-devtools'
import rootReducer from '../reducers/index'
import DevTools from '../containers/DevTools'

const enhancers = compose(
    DevTools.instrument(),
    // Lets you write ?debug_session=<key> in address bar to persist debug sessions
    persistState(getDebugSessionKey())
)

function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    return (matches && matches.length > 0)? matches[1] : null
}

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancers)

    if (module.hot) {
        module.hot.accept('../reducers/index', () =>
            store.replaceReducer(require('../reducers/index').default)
        )
    }

    return store
}