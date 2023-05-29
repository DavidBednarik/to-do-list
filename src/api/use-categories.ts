import { getCategoriesAPI } from "@/endpoints/endpoints";
import { Category } from "@/models/category";
import { useQuery, UseQueryResult } from "react-query";

export const CATEGORIES_KEY = "CATEGORIES";

export const getCategories = async () => {
	const res = await fetch(getCategoriesAPI);
	return res.json();
};

export const useCategories = (): UseQueryResult<Category[]> =>
	useQuery({ queryKey: [CATEGORIES_KEY], queryFn: () => getCategories() });
