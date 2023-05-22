import express from 'express'

const startPage = express.Router()

const options = {
	path: '/partners',
	title: 'partners',
	template: 'partners.ejs',
	styles: ['/pages/partners.css'],
	scripts: ['/components/partners.js'],
	hostClass: 'partners',
	messages: []
}

startPage.get('/partners', (request, response) => response.render('index', options))

export default startPage