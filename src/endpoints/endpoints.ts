import Endpoint from "@/enums/endpoint";

const BASE_URL = "https://647069d53de51400f72435a1.mockapi.io";

export const getCategoriesAPI = `${BASE_URL}/${Endpoint.CATEGORIES}`;

export const itemsAPI = `${BASE_URL}/${Endpoint.ITEMS}`;

export const getItemsAccordingCategory = (title: string) => {
	return `${BASE_URL}/${Endpoint.ITEMS}?category=${title}`;
};

export const removeItemsAPI = (id: string) => {
	return `${BASE_URL}/${Endpoint.ITEMS}/${id}`;
};

export const markTaskAsDoneApi = (id: string) => {
	return `${BASE_URL}/${Endpoint.ITEMS}/${id}`;
};
