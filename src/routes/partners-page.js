import express from 'express'

import { fetchJson, postJson } from '../helpers/fetchWrapper.js'

const partnersPage = express.Router()

// base API calls
const baseUrl = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1'
const faviconAPI = 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url='


// base API urls with endpoint and/or query params
const projectsData = await fetchJson(`${baseUrl}/urls?first=5`).then((data) => data);


const options = {
	path: '/partners',
	title: 'Partners',
	template: 'partners.ejs',
	styles: ['/pages/partners.css'],
	scripts: ['/components/partners.js'],
	hostClass: 'partners',
	messages: [],
	projectsData,
	faviconAPI
}

partnersPage.get(options.path, (request, response) => response.render('index', options))

console.log(projectsData)

export default partnersPage