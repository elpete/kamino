import {combineReducers} from 'redux'

import characteristics, * as fromCharacteristics from './characteristics'

const characteristicReducer = combineReducers({
	characteristics
})

export default characteristicReducer

import {CHANGE_CHARACTER_NAME} from '../actions/actions'
import {CHANGE_CHARACTER_SPECIES} from '../actions/actions'

const initialCharacterState = {
	name: '',
	species: '',
	characteristics: {}
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

export function getName(state) {
	return state.name
}

export function getSpecies(state) {
	return state.species
}

// export function getCharacteristics(state) {
// 	return {
// 		"brawn": fromCharacteristics.getBrawn(state.characteristics)
// 	}
// }