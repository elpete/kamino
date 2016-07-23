import {CHANGE_CHARACTER_SPECIES} from '../actions/actions'

// INITIAL STATE

const initialSpeciesState = {
	species: 'HUMAN'
}

// REDUCERS

function species( state = initialSpeciesState, action ) {
	switch (action.type) {
		case CHANGE_CHARACTER_SPECIES:
			return {
				...state,
				species:action.species
			}
		default:
			return state
	}
}

export default species

// SELECTORS

export function getSpecies(state) {
	return state.species
}