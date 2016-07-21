export const CHANGE_PLAYER_NAME = 'CHANGE_PLAYER_NAME'
export const CHANGE_CHARACTER_NAME = 'CHANGE_CHARACTER_NAME'
export const CHANGE_CHARACTER_SPECIES = 'CHANGE_CHARACTER_SPECIES'
export const CHANGE_CHARACTER_CHARACTERISTICS = 'CHANGE_CHARACTER_CHARACTERISTICS'
export const CHANGE_BRAWN = 'CHANGE_BRAWN'
export const CHAGEN_AGILTY = 'CHANGE_AGILITY'

export function changePlayerName(name) {
    return {
        type: CHANGE_PLAYER_NAME,
        name
    }
}

export function changeCharacterName(name) {
	return {
		type: CHANGE_CHARACTER_NAME,
		name
	}
}

export function changeCharacterSpecies(species) {
	return {
		type: CHANGE_CHARACTER_SPECIES,
		species
	}
}

export function changeCharacterCharacteristics(characteristics) {
	return {
		type: CHANGE_CHARACTER_CHARACTERISTICS,
		characteristics
	}
}

export function changeBrawn(brawn) {
	return {
		type:CHANGE_BRAWN,
		brawn
	}
}

export function changeAgility(agility) {
	return {
		type:CHANGE_AGILITY,
		agility
	}
}