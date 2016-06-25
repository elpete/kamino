import {combineReducers} from 'redux'

import player, * as fromPlayer from './player'
import character, * as fromCharacter from './character'

const rootReducer = combineReducers({
    player,
    character
})

export default rootReducer

export function getPlayerName(state) {
    return fromPlayer.getPlayerName(state.player)
}

export function getCharacterName(state) {
	return fromCharacter.getCharacterName(state.character)
}

export function getCharacterSpecies(state) {
	return fromCharacter.getCharacterSpecies(state.character)
}