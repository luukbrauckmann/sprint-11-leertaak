const apiUrl = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1'

/**
 * Data getten
 * @param {string} endpoint De endpoint van de data die je wilt getten
 * @param {*} query extra parameters om eventueel te filteren
 * @returns Promise met de data
 */
export const get = async (endpoint, query) => {
	const url = `${apiUrl}/${endpoint}`

	const options = {
		method: "GET"
	}

	return await fetch(url, options)
		.then((response) => response.json())
		.catch((error) => error)
}

/**
 * Data toevoegen aan de database
 * @param {string} endpoint De endpoint van de data die je wilt posten
 * @param {*} data De data die je wilt toevoegen aan de database
 * @returns Promise met de data
 */
export const create = async (endpoint, data) => {
	const url = `${apiUrl}/${endpoint}`

	const options = {
		method: "POST",
		body: JSON.stringify(data)
	}

	return await fetch(url, options)
		.then((response) => response.json())
		.catch((error) => error)
}

/**
 * Data updaten in de database
 * @param {string} endpoint De endpoint van de data die je wilt patchen
 * @param {*} data De data die je wilt updaten in de database
 * @returns Priomise met de data
 */
export const update = async (endpoint, data) => {
	const url = `${apiUrl}/${endpoint}`

	const options = {
		method: "PATCH",
		body: JSON.stringify(data)
	}

	return await fetch(url, options)
		.then((response) => response.json())
		.catch((error) => error)
}

/**
 *
 * @param {string} endpoint De endpoint van de data die je wilt deleten
 * @param {*} id De identifier van de data die je wilt deleten
 * @returns Promise met de data
 */
export const remove = async (endpoint, id) => {
	const url = `${apiUrl}/${endpoint}`

	const options = {
		method: "DELETE"
	}

	return await fetch(url, options)
		.then((response) => response.json())
		.catch((error) => error)
}