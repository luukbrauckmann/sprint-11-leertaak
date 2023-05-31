const skinColors = [
	"#8d5524",
	"#C68642",
	"#E0AC69",
	"#F1C27D",
	"#FFDBAC"
]

export let players = []
export let seats = Array.from({ length: 18 }, (_, i) => ({ id: i + 1, player: null, skinColor: "lightgrey", bodyColor: "grey" }))
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
				seats = Array.from({ length: 18 }, (_, i) => ({ id: i + 1, player: null, skinColor: "lightgrey", bodyColor: "grey" }))
				socket.emit('seats', seats)
			}, 1500)

		}
	}, 1000)
}

export const assignPlayerToSeat = (player) => {
	// Check if player is already checked in
	const alreadyAssigned = seats.find(seat => seat.player === player.id)
	if (alreadyAssigned) return

	// Assign player to seat
	const seat = seats.findLast(seat => seat.player === null)
	if (seat) {
		const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)]
		const bodyColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

		seat.player = player.id
		seat.skinColor = skinColor
		seat.bodyColor = bodyColor
	}

	// Check if all seats are assigned
	const avalableSeats = seats.filter(seat => seat.player !== null)
	if (avalableSeats.length === 18) departureTime = 1
}