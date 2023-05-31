/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
export async function fetchJson(url) {
    return await fetch(url)
        .then((response) => response.json())
        .catch((error) => error)
}

/**
 * postJson() is a wrapper for the experimental node fetch api. It fetches the url
 * passed as a parameter using the POST method and the value from the body paramater
 * as a payload. It returns the response body parsed through json.
 * @param {*} url the api endpoint to address
 * @param {*} body the payload to send along
 * @returns the json response from the api endpoint
 */
export async function postJson(url, body) {

    console.log(`url: ${url}, body: ${JSON.stringify(body)}`)

    return await fetch(url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => response.json())
        .catch((error) => error)
}