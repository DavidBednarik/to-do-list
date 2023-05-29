"use client";
import { Category } from "@/models/category";
import TodoCategory from "../categories/todo-category";
import styles from "./todo-layout.module.css";
import Filter from "../filter/filter";
import AddCategory from "../categories/add-category";
import { getCategoriesAPI } from "@/endpoints/endpoints";
import { useQuery } from "react-query";

const ToDoLayout = () => {
	const getCategories = async () => {
		const res = await fetch(getCategoriesAPI);
		return res.json();
	};

	const {
		data: categories,
		error,
		isLoading,
	} = useQuery({
		queryKey: "ToDoCategories",
		queryFn: getCategories,
	});

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
