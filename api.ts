import { Category } from "@/models/category";
import { Items } from "@/models/item";

export const getCategories = async (): Promise<Category[]> => {
	const url = `https://647069d53de51400f72435a1.mockapi.io/categories`;
	const res = await fetch(url, {
		cache: "no-store",
		method: "GET",
		headers: { "content-type": "application/json" },
	});
	const categories = res.json();
	return categories;
};

export const getItems = async (category: string): Promise<Items[]> => {
	const url = `https://647069d53de51400f72435a1.mockapi.io/items?category=${category}`;
	const res = await fetch(url, {
		cache: "no-store",
		method: "GET",
		headers: { "content-type": "application/json" },
	});
	const items = res.json();
	return items;
};
