"use client";
import { AppContext } from "@/context/app-context";
import { Category } from "@/models/category";
import { Items } from "@/models/item";
import { Skeleton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { filterTasks } from "../filter/utils";
import AddTask from "../item/add-new-item/add-task-main-component";
import ToDoItem from "../item/to-do-item";
import { useGetItems } from "../item/use-get-items/use-get-items";
import styles from "./categories.module.css";

const TodoCategory = ({ category: { title } }: { category: Category }) => {
	const { data, loading, getItems } = useGetItems({ title });
	const { selectedFilter } = useContext(AppContext);

	const itemsData = filterTasks(selectedFilter, data)?.map(
		(item: Items) =>
			item.category === title && (
				<ToDoItem item={item} key={item.id} getData={getItems} />
			)
	);

	const displayData = loading ? (
		<Skeleton
			variant="rectangular"
			height={200}
			style={{ borderRadius: 5, marginTop: 5 }}
		/>
	) : (
		itemsData
	);

	return (
		<div className={styles.container}>
			<Typography className={styles.title}>
				{title}
				<span className={styles.counter}>
					({filterTasks(selectedFilter, data)?.length ?? 0})
				</span>
			</Typography>
			<div className={styles.itemsContainer}>{displayData}</div>
			<AddTask categoryTitle={title} getData={getItems} />
		</div>
	);
};

export default TodoCategory;
