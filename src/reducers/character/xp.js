import speciesRef from '../../../reference/species.json'

import {CHANGE_CHARACTER_SPECIES} from '../../actions/actions'

const initialState = {
	total: 110,
	available: 110
}

export default function xp(state = initialState, action ) {
	switch (action.type) {
		case CHANGE_CHARACTER_SPECIES:
			const starting_xp = speciesRef[ action.species ].starting_xp;
			return {
				total: starting_xp,
				available: starting_xp
			}
		case "AWARD_EXPERIENCE":
			return {
				total: state.total + action.amount,
				available: state.available + action.amount
			}
		case "SPEND_EXPERIENCE":
			return {
				...state,
				available: state.available - action.amount
			}
		default:
			return state
	}
}

export function getXP( state ) {
	return state
}