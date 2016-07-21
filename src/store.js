import configureStore from './stores/configureStore'

function loadState() {
    // try {
    //     const serializedState = localStorage.getItem('state')
    //     if (serializedState === null) {
    //         return undefined
    //     }
    //     return JSON.parse(serializedState)
    // }
    // catch (err) {
    //     console.error(err)
    //     return undefined
    // }
}

function saveState(state) {
    // try {
    //     const serializedState = JSON.stringify(state)
    //     localStorage.setItem('state', serializedState)
    // }
    // catch (err) {
    //     console.error(err)
    // }

}

const store = configureStore(loadState())

store.subscribe(() => {
    saveState(store.getState())
})

export default store