import express from 'express'

const startPage = express.Router()

const options = {
	path: '/',
	title: 'Start',
	template: 'start.ejs',
	styles: ['/pages/start.css'],
	scripts: ['/components/check-in.js'],
	hostClass: 'start',
	messages: []
}

startPage.get(options.path, (request, response) => response.render('index', options))

export default startPage