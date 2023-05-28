import Filter from "@/enums/filter";
import { Items } from "@/models/item";

export const filterTasks = (
	selectedFilter: string,
	data: Items[] | undefined
) => {
	if (selectedFilter === Filter.DONE) {
		const doneTasks = data?.filter((item) => item.complete === true);
		return doneTasks;
	} else if (selectedFilter === Filter.IN_PROGRESS) {
		const activeTasks = data?.filter((item) => item.complete === false);
		return activeTasks;
	} else {
		return data;
	}
};
