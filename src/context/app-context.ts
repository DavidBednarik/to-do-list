"use client";
import Filter from "@/enums/filter";
import { createContext } from "react";
import { IAppContext } from "./types/app-context";

export const AppContext = createContext<IAppContext>({
	selectedFilter: Filter.ALL,
	setSelectedFilter: () => {},
});
