import Filter from "@/enums/filter";
import { Dispatch } from "react";

export interface IAppContext {
	selectedFilter: string;
	setSelectedFilter: Dispatch<React.SetStateAction<Filter>>;
}
