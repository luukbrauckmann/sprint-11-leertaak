document.documentElement.classList.add('js-enabled')

var socket = io()

socket.on('check-in', (changes) => console.log(changes));