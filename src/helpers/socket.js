export let players = []
export let departureTime = 30

export const addPlayer = (player) => players.push(player)
export const setPlayer = (aPlayer) => players = players.map((bPlayer) => bPlayer.id === aPlayer.id ? aPlayer : bPlayer)
export const removePlayer = (id) => players = players.filter(player => player.id !== id)
export const resetPlayer = () => players = players.map((player) => ({ ...player, checkedIn: false }))

export const departureTimer = (socket) => {
	const timer = setInterval(() => {
		departureTime--
		socket.emit('departure-time', departureTime)
		if (departureTime === 0) departureTime = 30
	}, 1000)
}