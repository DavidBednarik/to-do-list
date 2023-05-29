"use client";
import { Button } from "@mui/material";
import React from "react";
import AddNewItemModal from "./add-item-modal";
type AddToCategory = {
	categoryTitle: string;
	getData: () => Promise<void>;
};

const AddTask = ({ categoryTitle, getData }: AddToCategory) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				variant="outlined"
				fullWidth
				onClick={handleOpen}
				style={{ backgroundColor: "white" }}
			>
				Add new task +
			</Button>
			<AddNewItemModal
				open={open}
				closeModal={handleClose}
				categoryTitle={categoryTitle}
				getData={getData}
			/>
		</div>
	);
};

export default AddTask;
