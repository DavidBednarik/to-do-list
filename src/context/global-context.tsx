"use client";
import Filter from "@/enums/filter";
import React from "react";

import { AppContext } from "./app-context";

type Props = {
	children: React.ReactNode;
};

const ContextWrapper = ({ children }: Props): JSX.Element => {
	const [selectedFilter, setSelectedFilter] = React.useState(Filter.ALL);

	const contextValues = {
		selectedFilter,
		setSelectedFilter,
	};

	return (
		<AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
	);
};

export default ContextWrapper;
