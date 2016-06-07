import {combineReducers} from 'redux'

import player, * as fromPlayer from './player'

const rootReducer = combineReducers({
    player
})

export default rootReducer

export function getPlayerName(state) {
    return fromPlayer.getPlayerName(state.player)
}