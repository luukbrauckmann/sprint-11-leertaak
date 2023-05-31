import express from 'express'
import { get } from '../lib/data-access.js'

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

const getPartners = () => get("websites")

startPage.get(options.path, async (request, response) => {
	const partnersResponse = await getPartners()
	options["partners"] = partnersResponse.websites


	return response.render('index', options)
})

export default startPage