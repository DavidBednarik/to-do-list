import { Category } from "@/models/category";
import { getCategories } from "../../../api";
import AddTask from "../item/add-new-item/add-task-main-component";
import TodoCategory from "../categories/todo-category";
import styles from "./todo-layout.module.css";
import Filter from "../filter/filter";

const ToDoLayout = async () => {
	const categories: Category[] = await getCategories();

	const categoriesData = categories.map((category: Category) => (
		// eslint-disable-next-line react/jsx-key
		<div>
			<TodoCategory category={category} key={category.id} />
		</div>
	));

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>To do list</h3>
			{/* <AddTask categories={categories} /> */}
			<Filter />
			<div className={styles.categoryContainer}>{categoriesData}</div>
		</div>
	);
};

export default ToDoLayout;
