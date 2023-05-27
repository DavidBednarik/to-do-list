"use client";
import { Button } from "@mui/material";
import React from "react";
import AddNewItem from "./add-item-model";

const AddTask = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button variant="outlined" fullWidth onClick={handleOpen}>
				Add new item +
			</Button>
			<AddNewItem open={open} closeModal={handleClose} />
		</div>
	);
};

export default AddTask;
