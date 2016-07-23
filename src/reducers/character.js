import {combineReducers} from 'redux'

import characteristics, * as fromCharacteristics from './characteristics'
import species, * as fromSpecies from './species'
import career, * as fromCareer from './career'

import {CHANGE_CHARACTER_NAME} from '../actions/actions'

const initialCharacterState = {
	name: ''
}

function name(state = initialCharacterState, action) {
	switch (action.type) {
		case CHANGE_CHARACTER_NAME:
			return Object.assign({}, state, {
				name:action.name
			})
		default:
			return state
	}
}

const character = combineReducers({
	name,
	species,
	characteristics,
	career
})

export default character

export function getName( state ) {
	return state.name.name
}

export function getSpecies( state ) {
	return fromSpecies.getSpecies( state.species )
}

export function getCharacteristics( state ) {
	return fromCharacteristics.getCharacteristics( state.characteristics )
}

export function getCareer( state ) {
	return fromCareer.getCareer( state.career )
}