import express from 'express'

const startPage = express.Router()

const options = {
	path: '/',
	title: 'Start',
	template: 'start.ejs',
	styles: ['/pages/start.css'],
	scripts: ['/components/check-in.js'],
	hostClass: 'start',
	messages: [],
	data: []
}

function getData(){
	return fetch("https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/websites")
		.then((res) => res.json())

}

startPage.get(options.path, async (request, response) => {
	options.data = await getData()
	return response.render('index', options)
})

export default startPage