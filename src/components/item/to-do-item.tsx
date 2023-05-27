"use client";
import { Items } from "@/models/item";
import React from "react";

const ToDoItem = ({
	item: { title, description, id, category },
}: {
	item: Items;
}) => {
	return (
		<div
			style={{
				padding: 10,
				height: 200,
				border: "1px solid grey",
				borderRadius: 5,
				marginTop: 10,
			}}
		>
			<div>
				<h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
					{title}
				</h3>
				<p className="font-normal text-gray-700 dark:text-gray-400 w-500">
					{description}
				</p>
				<div>Remove</div>
			</div>
		</div>
	);
};

export default ToDoItem;
