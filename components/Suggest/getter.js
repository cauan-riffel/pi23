export async function getIp(){
	let res=await fetch("https://api.ipify.org/?format=json",{method:'GET'});
	if(res.status===200){
		let body=await res.json();
		return body['ip'];
	}
}
const BASE_API_URL = "http://192.168.43.155:8080"
const BASE_HEADERS = {
    "Content-Type": "application/json",
}

/**
 * Creates a suggestion.
 *
 * @param {Object} data - The suggestion data.
 * @param {string} data.name - The name of the person making the suggestion.
 * @param {string} data.email - The email of the person making the suggestion.
 * @param {string} data.text - The text of the suggestion.
 * @param {Object} headers - Security headers.
 * @param {string} headers.clientMacAddress - The client's MAC address.
 * @throws {Error} If any of the parameters are not of type string.
 */
export async function createSuggestion(data) {
	const response = await fetch(`${BASE_API_URL}/suggestions`, {
		method: "POST",
		mode:"cors",
		headers: {
			...BASE_HEADERS,
			"X-Client-Ip":await getIp(),
		},
		body: JSON.stringify(data),
	})


	if (response.status === 201) {
    return{
			status: 201,
			body: null
    }
	}else{
		return {
			status: response.status,
			body: await response.json()
		}
	}
}
