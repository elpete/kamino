export const CHANGE_PLAYER_NAME = 'CHANGE_PLAYER_NAME'
export const CHANGE_CHARACTER_NAME = 'CHANGE_CHARACTER_NAME'
export const CHANGE_CHARACTER_SPECIES = 'CHANGE_CHARACTER_SPECIES'
export const CHANGE_CHARACTER_CHARACTERISTICS = 'CHANGE_CHARACTER_CHARACTERISTICS'
export const CHANGE_BRAWN = 'CHANGE_BRAWN'
export const CHANGE_AGILITY = 'CHANGE_AGILITY'
export const CHANGE_INTELLECT = 'CHANGE_INTELLECT'
export const CHANGE_CUNNING = 'CHANGE_CUNNING'
export const CHANGE_WILLPOWER = 'CHANGE_WILLPOWER'
export const CHANGE_PRESENCE = 'CHANGE_PRESENCE'
export const CHANGE_CHARACTER_CAREER = 'CHANGE_CHARACTER_CAREER'
export const CHANGE_CHARACTER_SPECIALIZATION = 'CHANGE_CHARACTER_SPECIALIZATION'


export function changePlayerName( name ) {
    return {
        type: CHANGE_PLAYER_NAME,
        name
    }
}

export function changeCharacterName( name ) {
	return {
		type: CHANGE_CHARACTER_NAME,
		name
	}
}

export function changeCharacterSpecies( species ) {
	return {
		type: CHANGE_CHARACTER_SPECIES,
		species
	}
}

export function changeCharacterCharacteristics( characteristics ) {
	return {
		type: CHANGE_CHARACTER_CHARACTERISTICS,
		characteristics
	}
}

export function changeBrawn( brawn ) {
	return {
		type:CHANGE_BRAWN,
		brawn
	}
}

export function changeAgility( agility ) {
	return {
		type:CHANGE_AGILITY,
		agility
	}
}

export function changeIntellect( intellect ) {
	return {
		type:CHANGE_INTELLECT,
		intellect
	}
}

export function changeCunning( cunning ) {
	return {
		type:CHANGE_CUNNING,
		cunning
	}
}

export function changeWillpower( willpower ) {
	return {
		type:CHANGE_WILLPOWER,
		willpower
	}
}

export function changePresence( presence ) {
	return {
		type:CHANGE_PRESENCE,
		presence
	}
}

export function changeCharacterCareer( career ) {
	return {
		type:CHANGE_CHARACTER_CAREER,
		career
	}
}

export function changeCharacterSpecializtion( specialization ) {
	return {
		type: CHANGE_CHARACTER_SPECIALIZATION,
		specialization
	}
}

