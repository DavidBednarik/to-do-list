"use client";
import { Category } from "@/models/category";
import TodoCategory from "../categories/todo-category";
import styles from "./todo-layout.module.css";
import Filter from "../filter/filter";
import AddCategory from "../categories/add-category";
import { useGetCategories } from "../categories/use-get-categories";

const ToDoLayout = () => {
	const { data: categories } = useGetCategories();

	const categoriesData = categories?.map((category: Category) => (
		<TodoCategory category={category} key={category.id} />
	));

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>To do list</h3>
			<Filter />
			<div className={styles.categoryContainer}>
				{categoriesData} <AddCategory />
			</div>
		</div>
	);
};

export default ToDoLayout;
