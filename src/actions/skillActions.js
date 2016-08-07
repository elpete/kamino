export const CHANGE_INITIAL_CAREER_SKILLS = 'CHANGE_INITIAL_CAREER_SKILLS'
export const CHANGE_INITIAL_SPECIALIZATION_SKILLS = 'CHANGE_INITIAL_SPECIALIZATION_SKILLS'
export const CHANGE_LIGHTSABER_SKILL = 'CHANGE_LIGHTSABER_SKILL'

export function changeInitialCareerSkills( initialCareerSkills ) {
	return {
		type: CHANGE_INITIAL_CAREER_SKILLS,
		initialCareerSkills
	}
}

export function changeInitialSpecializationSkills( initialSpecializationSkills ) {
	return {
		type: CHANGE_INITIAL_SPECIALIZATION_SKILLS,
		initialSpecializationSkills
	}
}

export function changeLightsaberSkill( lightsaberSkill ) {
	return {
		type: CHANGE_LIGHTSABER_SKILL,
		lightsaberSkill
	}
}