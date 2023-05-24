export let players = []

export const addPlayer = (player) => players.push(player)
export const setPlayer = (aPlayer) => players = players.map((bPlayer) => bPlayer.id === aPlayer.id ? aPlayer : bPlayer)
export const removePlayer = (aPlayer) => players = players.filter(bPlayer => bPlayer.id !== aPlayer.id)
export const resetPlayer = () => players = players.map((player) => ({ ...player, checkedIn: false }))