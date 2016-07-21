import {combineReducers} from 'redux'

import characteristics, * as fromCharacteristics from './characteristics'

import {CHANGE_CHARACTER_NAME} from '../actions/actions'
import {CHANGE_CHARACTER_SPECIES} from '../actions/actions'

const initialCharacterState = {
	name: '',
	species: 'HUMAN'
}

function details(state = initialCharacterState, action) {
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

const character = combineReducers({
	details,
	characteristics
})

export default character

export function getName(state) {
	return state.details.name
}

export function getSpecies(state) {
	return state.details.species
}

export function getCharacteristics(state) {
	return fromCharacteristics.getCharacteristics( state.characteristics )
}