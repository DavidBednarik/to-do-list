"use client";
import { Category } from "@/models/category";
import { Button } from "@mui/material";
import React from "react";
import AddNewItem from "./add-item-modal";

const AddTask = ({ categories }: { categories: Category[] }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button variant="outlined" fullWidth onClick={handleOpen}>
				Add new task +
			</Button>
			<AddNewItem
				open={open}
				closeModal={handleClose}
				categories={categories}
			/>
		</div>
	);
};

export default AddTask;
