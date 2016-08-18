import {CHANGE_CHARACTER_NAME} from '../../actions/actions'

const initialState = ''

export default function name(state = initialState, action) {
	switch (action.type) {
		case CHANGE_CHARACTER_NAME:
			return action.name
		default:
			return state
	}
}

export function getName( state ) {
	return state
}