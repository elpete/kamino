import {CHANGE_BRAWN} from '../actions/actions'

const initialCharacteristicState = {
	brawn: '1'
}

function characteristics(state = initialCharacteristicState, action) {
	switch (action_type) {
		case CHANGE_BRAWN:
			return Object.assign({}, state, {
				brawn:action.brawn
			})
		default:
			return state
	}
}

export default characteristics

export function getBrawn(state) {
	return state.brawn
}
