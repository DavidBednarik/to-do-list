"use client";
import { Items } from "@/models/item";
import styles from "./item.module.css";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const ToDoItem = ({
	item: { title, description, id, category, complete },
}: {
	item: Items;
}) => {
	return (
		<Card className={styles.cardContainer}>
			<CardContent style={{ minHeight: 100 }}>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
				<Typography>Date</Typography>
				<Typography>Time</Typography>
				<FormControlLabel
					value={complete}
					control={<Checkbox checked={complete} />}
					label="Mark as done"
					labelPlacement="end"
				/>
			</CardContent>
			<CardActions style={{ justifyContent: "space-between" }}>
				<Button size="small">Remove</Button>
				<Button size="small">Edit</Button>
			</CardActions>
		</Card>
	);
};

export default ToDoItem;
