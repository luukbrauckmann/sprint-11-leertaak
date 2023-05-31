import express from 'express'

import { fetchJson, postJson } from '../helpers/fetchWrapper.js'
import { get } from '../lib/data-access.js'

const partnersPage = express.Router()

// base API calls
const baseUrl = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1'
const faviconAPI = 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url='


// base API urls with endpoint and/or query params
const projectsData = await fetchJson(`${baseUrl}/urls?first=20`).then((data) => data);


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

const getPartners = () => get("websites")

partnersPage.get(options.path, async (request, response) => {
	const partnersResponse = await getPartners()
	options["partners"] = partnersResponse.websites


	return response.render('index', options)
})

export default partnersPage