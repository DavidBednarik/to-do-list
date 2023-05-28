import { dataFetcher } from "@/get-json";
import { useLoadData } from "@/use-data";
import { FormValues } from "./add-item-modal";
import uuid from "react-uuid";
import { Dayjs } from "dayjs";
import Method from "@/enums/option-method";
import { Items } from "@/models/item";

const useAddItem = () => {
	const { loadData, data, loading } = useLoadData<Items>();

	const option = (body: string) => {
		return {
			cache: "no-store",
			method: Method.POST,
			headers: { "content-type": "application/json" },
			body: body,
		};
	};

	const addItem = async (
		data: FormValues,
		dateTime: Dayjs | null,
		categoryTitle: string
	) => {
		const url = "https://647069d53de51400f72435a1.mockapi.io/items";
		const body = JSON.stringify({
			id: uuid(),
			title: data.title,
			description: data.description,
			category: categoryTitle,
			deadline: dateTime,
			complete: false,
		});
		await loadData(() => dataFetcher(url, option(body)));
	};

	return { addItem, loading, data };
};

export { useAddItem };
