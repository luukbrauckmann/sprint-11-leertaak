const checkInElement = document.querySelector('.check-in')
const parent = checkInElement.parentElement

parent.addEventListener("scroll", (event) => {
	const rect = checkInElement.getBoundingClientRect()
	const inView = rect.top >= 0 && rect.bottom <= window.innerHeight
	if (inView) checkInElement.classList.add('play')
	else checkInElement.classList.remove('play')
})
