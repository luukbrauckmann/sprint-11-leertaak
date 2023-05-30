export let players = []
export let seats = Array.from({ length: 18 }, (_, i) => ({ id: i + 1, player: null }))
export let departureTime = 30

export const addPlayer = (player) => players.push(player)
export const setPlayer = (aPlayer) => players = players.map((bPlayer) => bPlayer.id === aPlayer.id ? aPlayer : bPlayer)
export const removePlayer = (id) => players = players.filter(player => player.id !== id)
export const resetPlayer = () => players = players.map((player) => ({ ...player, checkedIn: false }))

export const departureTimer = (socket) => {
	setInterval(() => {
		departureTime--
		socket.emit('departure-time', departureTime)
		if (departureTime === 0) {
			departureTime = 30
			setTimeout(() => {
				seats = Array.from({ length: 18 }, (_, i) => ({ id: i + 1, player: null }))
				socket.emit('seats', seats)
			}, 1500)

		}
	}, 1000)
}

export const assignPlayerToSeat = (player) => {
	const alreadyAssigned = seats.find(seat => seat.player === player.id)
	if (alreadyAssigned) return
	const seat = seats.find(seat => seat.player === null)
	if (seat) seat.player = player.id
	const avalableSeats = seats.filter(seat => seat.player !== null)
	if (avalableSeats.length === 18) departureTime = 1
}