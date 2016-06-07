import {CHANGE_PLAYER_NAME} from '../actions/actions'

const initialPlayerState = {
    name: ''
}

function player(state = initialPlayerState, action) {
    switch (action.type) {
        case CHANGE_PLAYER_NAME:
            return Object.assign({}, state, {
                name: action.name
            })
        default:
            return state
    }
}

export default player

export function getPlayerName(state) {
    return state.name
}