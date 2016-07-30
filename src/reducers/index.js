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

export function getCharacter(state){
	return {
		"name":fromCharacter.getName(state.character),
		"species":fromCharacter.getSpecies(state.character),
		"characteristics": fromCharacter.getCharacteristics(state.character),
		"career": fromCharacter.getCareer(state.character),
		"specialization": fromCharacter.getSpecialization(state.character)
	}
}