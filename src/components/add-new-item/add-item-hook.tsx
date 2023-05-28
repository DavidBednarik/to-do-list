import { dataFetcher } from "@/get-json";
import { useLoadData } from "@/use-data";
import { useRouter } from "next/navigation";
import { FormValues } from "./add-item-modal";
import uuid from "react-uuid";

type response = {
	message: string;
	name: string;
	response: string;
	status: number;
};

const useAddItem = () => {
	const router = useRouter();
	const { loadData, data, loading, error } = useLoadData<
		response | undefined
	>();

	const option = (body: string) => {
		return {
			cache: "no-store",
			method: "POST",
			headers: { "content-type": "application/json" },
			body: body,
		};
	};

	const addItem = async (data: FormValues, dateTime: Dayjs | null) => {
		const url = "https://647069d53de51400f72435a1.mockapi.io/items";
		const body = JSON.stringify({
			id: uuid(),
			title: data.title,
			description: data.description,
			category: data.category,
			deadline: dateTime,
			complete: false,
		});
		await loadData(() => dataFetcher(url, option(body)));
	};

	return { addItem, loading, data };
};

export { useAddItem };
