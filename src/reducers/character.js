import {CHANGE_CHARACTER_NAME} from '../actions/actions'
import {CHANGE_CHARACTER_SPECIES} from '../actions/actions'

const initialCharacterState = {
	name: 'Riskyr',
	species: 'HUMAN'
}

function character(state = initialCharacterState, action) {
	switch (action.type) {
		case CHANGE_CHARACTER_NAME:
			return Object.assign({}, state, {
				name:action.name
			})
		case CHANGE_CHARACTER_SPECIES:
			return Object.assign({}, state, {
				species:action.species
			})
		default:
			return state
	}
}

export default character

export function getCharacterName(state) {
	return state.name
}

export function getCharacterSpecies(state) {
	return state.species
}