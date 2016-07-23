import {CHANGE_CHARACTER_CAREER} from '../actions/actions'

//INITIAL STATE

const initialCareerState = {
	career: 'SEEKER'
}

//REDUCERS

function career( state = initialCareerState, action ) {
	switch (action.type) {
		case CHANGE_CHARACTER_CAREER:
			return{
				...state,
				career:action.career
			}
		default:
			return state
	}
}

export default career

// SELECTORS

export function getCareer(state) {
	return state.career
}