let players = []

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
	console.log(player);
	player.checkedIn = true
	socket.emit('players', player)
}

socket.on('players', (newPlayers) => {
	players = newPlayers
	console.log(players);
})


