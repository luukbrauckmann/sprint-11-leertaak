const checkInElement = document.querySelector('.check-in')
const parent = checkInElement.parentElement

parent.addEventListener("scroll", (event) => {
	const inView = (checkInElement.offsetTop < (parent.offsetTop + parent.innerHeight) && (checkInElement.offsetTop + checkInElement.offsetHeight) > parent.offsetTop)

	console.log(inView);
})
