import { getItemsAccordingCategory } from "@/endpoints/endpoints";
import Method from "@/enums/option-method";
import { dataFetcher } from "@/get-json";
import { Items } from "@/models/item";
import { useLoadData } from "@/use-data";
import { useEffect } from "react";

type CategoryTitle = {
	title: string;
};

const useGetItems = ({ title }: CategoryTitle) => {
	const { loadData, data, loading } = useLoadData<Items[]>();

	const option = () => {
		return {
			cache: "no-store",
			method: Method.GET,
			headers: { "content-type": "application/json" },
		};
	};

	const getItems = async () => {
		const url = getItemsAccordingCategory(title);
		await loadData(() => dataFetcher(url, option()));
	};

	useEffect(() => {
		getItems();
		// eslint-disable-next-line -- dont need getOrderData as dependency
	}, []);

	return { getItems, loading, data };
};

export { useGetItems };
