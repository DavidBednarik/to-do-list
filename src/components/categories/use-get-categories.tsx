import { getCategoriesAPI } from "@/endpoints/endpoints";
import Method from "@/enums/option-method";
import { dataFetcher } from "@/get-json";
import { Items } from "@/models/item";
import { useLoadData } from "@/use-data";
import { useEffect } from "react";

const useGetCategories = () => {
	const { loadData, data, loading } = useLoadData<Items[]>();

	const option = () => {
		return {
			cache: "no-store",
			method: Method.GET,
			headers: { "content-type": "application/json" },
		};
	};

	const getCategories = async () => {
		await loadData(() => dataFetcher(getCategoriesAPI, option()));
	};

	useEffect(() => {
		getCategories();
		// eslint-disable-next-line -- dont need getOrderData as dependency
	}, []);

	return { getCategories, loading, data };
};

export { useGetCategories };
