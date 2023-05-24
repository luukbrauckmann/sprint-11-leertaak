export let players = []

export const addPlayer = (player) => players.push(player)
export const removePlayer = (aPlayer) => players = players.filter(bPlayer => bPlayer.id !== aPlayer.id)