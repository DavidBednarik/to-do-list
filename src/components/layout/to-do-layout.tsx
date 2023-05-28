import { Category } from "@/models/category";
import { getCategories } from "../../../api";
import AddTask from "../add-new-item/add-new-item";
import TodoCategory from "../categories/todo-category";
import styles from "./todo-layout.module.css";

const ToDoLayout = async () => {
	const categories: Category[] = await getCategories();

	const categoriesData = categories.map((category: Category) => (
		// eslint-disable-next-line react/jsx-key
		<div>
			{/* @ts-expect-error Async Server Component, reason: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching */}
			<TodoCategory category={category} key={category.id} />
		</div>
	));

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>To do list</h3>
			<AddTask categories={categories} />
			<div className={styles.categoryContainer}>{categoriesData}</div>
		</div>
	);
};

export default ToDoLayout;
