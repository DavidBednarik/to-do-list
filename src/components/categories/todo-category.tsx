import { Category } from "@/models/category";
import { Items } from "@/models/item";
import React from "react";
import { getItems } from "../../../api";
import ToDoItem from "../item/to-do-item";
import styles from "./categories.module.css";

const TodoCategory = async ({
	category: { title },
}: {
	category: Category;
}) => {
	const items: Items[] = await getItems(title);

	const itemsData = items?.map((item: Items) => (
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
