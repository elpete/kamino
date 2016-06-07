export const CHANGE_PLAYER_NAME = 'CHANGE_PLAYER_NAME'

export function changePlayerName(name) {
    return {
        type: CHANGE_PLAYER_NAME,
        name
    }
}