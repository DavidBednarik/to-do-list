import { markTaskAsDoneApi } from "@/endpoints/endpoints";
import Method from "@/enums/option-method";
import { dataFetcher } from "@/get-json";
import { Items } from "@/models/item";
import { useLoadData } from "@/use-data";

type response = {
	message: string;
	name: string;
	response: string;
	status: number;
};

const useMarkTaskAsDone = () => {
	const { loadData, data, loading } = useLoadData<response | undefined>();

	const option = (body: string) => {
		return {
			cache: "no-store",
			method: Method.PUT,
			headers: { "content-type": "application/json" },
			body: body,
		};
	};

	const markTaskAsDone = async (item: Items) => {
		const { id, title, description, category, deadline, complete } = item;
		const body = JSON.stringify({
			id: id,
			title: title,
			description: description,
			category: category,
			deadline: deadline,
			complete: !complete,
		});
		const url = markTaskAsDoneApi(id);

		await loadData(() => dataFetcher(url, option(body)));
	};

	return { markTaskAsDone, loading, data };
};

export { useMarkTaskAsDone };
