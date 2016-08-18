//ACTIONS
import {
	CHANGE_INITIAL_CAREER_SKILLS,
	CHANGE_INITIAL_SPECIALIZATION_SKILLS,
	CHANGE_LIGHTSABER_SKILL
} from '../../actions/skillActions'

//INITIAL STATE
const initialSkillsState = {
	initialCareerSkills: [],
	initialSpecializationSkills: [],
	lightsaberSkill: 0
}

function skills( state = initialSkillsState, action ) {
	switch ( action.type ) {
		case CHANGE_INITIAL_CAREER_SKILLS:
			return {
				...state,
				initialCareerSkills: action.initialCareerSkills
			}
		case CHANGE_INITIAL_SPECIALIZATION_SKILLS:
			return {
				...state,
				initialSpecializationSkills: action.initialSpecializationSkills
			}	
		case CHANGE_LIGHTSABER_SKILL:
			return {
				...state,
				lightsaberSkill: action.lightsaberSkill
			}
		default:
			return state
	}
}

export default skills

//SELECTORS
export function getSkills( state ) {
	return state
}

export function initialCareerSkills( state ) {
	return state.initialCareerSkills
}

export function initialSpecializationSkills( state ) {
	return state.initialSpecializationSkills
}

export function getLightsaberSkill( state ) {
	return state.lightsaberSkill
}

