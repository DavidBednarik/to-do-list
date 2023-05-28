type header = {
	"content-type": string;
};

type Option = {
	cache: string;
	method: string;
	headers?: header;
	body?: string | FormData;
};

const dataFetcher = async (endpoint: string, option?: Option) => {
	// @ts-ignore
	const response = await fetch(endpoint, option);

	if (response.ok) {
		return await response.json();
	}

	throw new Error(
		"Network call failed. Status code: " + response.status + endpoint + option
	);
};

export { dataFetcher };
