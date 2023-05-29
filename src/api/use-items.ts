import { getItemsAccordingCategory } from "@/endpoints/endpoints";
import { Items } from "@/models/item";
import { useQuery, UseQueryResult } from "react-query";

export const getItems = async (title: string) => {
	console.log(title);

	const res = await fetch(getItemsAccordingCategory(title));
	return res.json();
};

export const useItems = (title: string): UseQueryResult<Items[]> =>
	useQuery({ queryKey: [title], queryFn: () => getItems(title) });
