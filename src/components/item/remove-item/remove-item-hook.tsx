import { removeItemsAPI } from "@/endpoints/endpoints";
import Method from "@/enums/option-method";
import { dataFetcher } from "@/get-json";
import { useLoadData } from "@/use-data";

type response = {
	message: string;
	name: string;
	response: string;
	status: number;
};

const useRemoveItem = () => {
	const { loadData, data, loading } = useLoadData<response | undefined>();

	const option = () => {
		return {
			cache: "no-store",
			method: Method.DELETE,
			headers: { "content-type": "application/json" },
		};
	};

	const removeItem = async (id: string) => {
		const url = removeItemsAPI(id);
		await loadData(() => dataFetcher(url, option()));
	};

	return { removeItem, loading, data };
};

export { useRemoveItem };
