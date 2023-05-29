"use client";
import React from "react";
import { Button } from "@mui/material";
import style from "./categories.module.css";

const AddCategory = () => {
	return (
		<div>
			<Button variant="outlined" className={style.buttonAdd} disabled>
				Add section +
			</Button>
		</div>
	);
};

export default AddCategory;
