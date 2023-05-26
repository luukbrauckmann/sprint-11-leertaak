let players = []
let departureTime = 30

const checkInElement = document.querySelector('.check-in')

const parent = checkInElement.parentElement
parent.addEventListener("scroll", (event) => {
	const rect = checkInElement.getBoundingClientRect()
	const inView = rect.top >= 0 && rect.bottom <= window.innerHeight
	if (inView) checkInElement.classList.add('play')
	else checkInElement.classList.remove('play')
})

const checkInDevice = document.querySelector('.check-in-button')
checkInDevice.addEventListener('click', () => checkIn())

checkIn = () => {
	const { id } = socket
	let player = players.find(player => player.id === id)
	player.checkedIn = true
	socket.emit('players', player)
}

socket.on('players', (newPlayers) => players = newPlayers)
socket.on('departure-time', (newDepartureTime) => {
	departureTime = newDepartureTime

	console.log(departureTime)
})




