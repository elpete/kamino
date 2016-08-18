import {combineReducers} from 'redux'

//REDUCERS
import characteristics, * as fromCharacteristics from './characteristics'
import species, * as fromSpecies from './species'
import career, * as fromCareer from './career'
import specialization, * as fromSpecialization from './specialization'
import skills, * as fromSkills from './skills'
import xp, * as fromXP from './xp'
import name, * as fromName from './name'


export default combineReducers({
	name,
	species,
	characteristics,
	career,
	specialization,
	skills,
	xp
})

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

export function getSpecialization( state ) {
	return fromSpecialization.getSpecialization( state.specialization )
}

export function getSkills( state ) {
	return fromSkills.getSkills( state.skills )
}

export function getXP( state ) {
	return fromXP.getXP( state.xp )
}

export function getName( state ) {
	return fromName.getName( state.name )
}