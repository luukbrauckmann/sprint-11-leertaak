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
	
	let { filterPartner } = request.query

	const sortFields = [
		{ label: 'Partner', field: 'titel' },
		{ label: 'Datum', field:  'createdAt'}
	]

	const sortDirections = [
		{ label: 'Oplopend', field: 'ASC' },
		{ label: 'Aflopend', field: 'DESC' }
	]

	  // gets sort value from url query param
	  let { sortField } = request.query
	  let { sortDirection } = request.query
	  // parses the value so it can be accessed as JSON
	  if (sortField) {
		sortField = JSON.parse(sortField)
	  } else {
		sortField = sortFields[0]
	  }
	  if (sortDirection) {
		sortDirection = JSON.parse(sortDirection)
	  } else {
		sortDirection = sortDirections[0]
	  }
	  // clones allProjectsData.urls so .reverse() function won't affect the original
	  let projects = [...projectsData.urls];
	  // gets the underlaying website titel and maps it straight to url as titel
	  projects = projects.map((project) => ({ ...project, titel: project.website.titel }))
	  // sorts every url by given sort option field of cloned allProjectsData.urls
	  projects = projects.sort((a, b) => a[sortField.field].localeCompare(b[sortField.field]))
	  //checks for sorting direction, if direction is DESC, reverse cloned urls ones
	  if (sortDirection.field === 'DESC') projects.reverse()

	  console.log(sortField)

	options["partners"] = partnersResponse.websites
	options['filterPartner'] = filterPartner

	options["sortFields"] = sortFields
	options["currentSortField"] = sortField

	options["sortDirections"] = sortDirections
	options["currentSortDirection"] = sortDirection

	options["projectsData"] = projects

	return response.render('index', options)
})

export default partnersPage