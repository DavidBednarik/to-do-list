"use client";
import { AppContext } from "@/context/app-context";
import Filter from "@/enums/filter";
import { Category } from "@/models/category";
import { Items } from "@/models/item";
import React, { useContext } from "react";
import { filterTasks } from "../filter/utils";
import ToDoItem from "../item/to-do-item";
import { useGetItems } from "../item/use-get-items/use-get-items";
import styles from "./categories.module.css";

const TodoCategory = ({ category: { title } }: { category: Category }) => {
	const { data } = useGetItems({ title });
	const { selectedFilter } = useContext(AppContext);

	const itemsData = filterTasks(selectedFilter, data)?.map((item: Items) => (
		<ToDoItem item={item} key={item.id} />
	));

	return (
		<div className={styles.container}>
			{title}
			<hr />
			<div className={styles.itemsContainer}>{itemsData}</div>
		</div>
	);
};

export default TodoCategory;
