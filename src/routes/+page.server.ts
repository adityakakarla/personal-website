import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ getClientAddress }) => {
	const ip = getClientAddress();
	const url = `http://ip-api.com/json/${ip}`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('HTTP error! Status: ' + response.status);
		}
		const data = await response.json();
		const city = data.city;
		return {
			error: false,
			city: city
		};
	} catch (err) {
		console.error(err);
		return {
			error: true,
			city: null
		};
	}
};
