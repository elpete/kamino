import {CHANGE_BRAWN, CHANGE_AGILITY, CHANGE_CHARACTER_CHARACTERISTICS} from '../actions/actions'

// INITIAL STATE

const initialCharacteristicState = {
	brawn: 2,
	agility: 2,
	intellect: 2,
	cunning: 2,
	willpower: 2,
	presence: 2,
}

// REDUCERS

function characteristics( state = initialCharacteristicState, action ) {
	switch (action.type) {
		case CHANGE_CHARACTER_CHARACTERISTICS:
			console.log(action)
			return {
				...state,
				brawn:action.characteristics.brawn,
				agility:action.characteristics.agility,
				intellect:action.characteristics.intellect,
				cunning:action.characteristics.cunning,
				willpower:action.characteristics.willpower,
				presence:action.characteristics.presence,
			}
		case CHANGE_BRAWN:
			return Object.assign({}, state, {
				brawn:action.brawn
			})
		case CHANGE_AGILITY:
			return Object.asssin({}, state, {
				agilty:action.agility
			})
		default:
			return state
	}
}

export default characteristics

// SELECTORS

export function getCharacteristics( state ) {
	return state
}

export function getBrawn( state ) {
	return state.brawn
}

export function getAgility( state ) {
	return state.agility
}

export function getIntellect( state ) {
	return state.intellect
}

export function getCunning( state ) {
	return state.cunning
}

export function getWillpower( state ) {
	return state.willpower
}

export function getPresence( state ) {
	return state.presence
}
