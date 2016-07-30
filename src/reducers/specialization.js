import { CHANGE_CHARACTER_SPECIALIZATION } from '../actions/actions'

//INITIAL STATE
const initialSpecializationState = {
	specialization: 'ASSASSIN'
}

//REDUCERS
function specialization( state = initialSpecializationState, action ) { 
	switch ( action.type ) {
		case CHANGE_CHARACTER_SPECIALIZATION:
			return {
				...state,
				specialization:action.specialization
			}
		default:
			return state
	}
}

export default specialization

// SELECTORS
export function getSpecialization( state ) {
	return state.specialization
}