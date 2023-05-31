let players = []
let seats = []
let departureTime = 30

const departureTimeElement = document.querySelector('#departure-time')
const checkInElement = document.querySelector('.check-in')
const bus = document.querySelector('.bus')

const parent = checkInElement.parentElement
parent.addEventListener("scroll", (event) => {
	const rect = checkInElement.getBoundingClientRect()
	const inView = rect.top >= 0 && rect.bottom <= window.innerHeight
	if (inView) checkInElement.classList.add('play')
	else checkInElement.classList.remove('play')
})

const checkInDevice = document.querySelector('.check-in-device')
checkInDevice.addEventListener('click', () => checkIn())

checkIn = () => {
	const { id } = socket

	// Check if player is already checked in
	const alreadyAssigned = seats.find(seat => seat.player === id)
	if (alreadyAssigned) return

	let player = players.find(player => player.id === id)
	player.checkedIn = true
	socket.emit('players', player)
	socket.emit('seats', player)

	checkInDevice.classList.add('check-in-device--success')
	setTimeout(() => checkInDevice.classList.remove('check-in-device--success'), 1500);
}

socket.on('players', (newPlayers) => players = newPlayers)
socket.on('seats', (newSeats) => {
	seats = newSeats

	for (let seat of seats) {
		const seatElement = document.querySelector(`.checked-in-user--${seat.id}`)
		const seatIsAssigned = seat.player !== null
		if (seatIsAssigned) seatElement.classList.add('checked-in-user--assigned')
		else seatElement.classList.remove('checked-in-user--assigned')
	}
})
socket.on('departure-time', (newDepartureTime) => {
	departureTime = newDepartureTime
	departureTimeElement.innerText = departureTime

	if (departureTime === 0) {
		bus.classList.replace('move-in', 'move-out')
		setTimeout(() => bus.classList.replace('move-out', 'move-in'), 1500)
	}
})




