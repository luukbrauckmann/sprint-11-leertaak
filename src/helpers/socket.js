export let players = []

export const addPlayer = (player) => players.push(player)
export const setPlayer = (aPlayer) => players = players.map((bPlayer) => bPlayer.id === aPlayer.id ? aPlayer : bPlayer)
export const removePlayer = (id) => players = players.filter(player => player.id !== id)
export const resetPlayer = () => players = players.map((player) => ({ ...player, checkedIn: false }))