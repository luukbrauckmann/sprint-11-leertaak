import express from 'express'

const partnersPage = express.Router()

const options = {
	path: '/partners',
	title: 'Partners',
	template: 'partners.ejs',
	styles: ['/pages/partners.css'],
	scripts: ['/components/partners.js'],
	hostClass: 'partners',
	messages: []
}

partnersPage.get(options.path, (request, response) => response.render('index', options))

export default partnersPage