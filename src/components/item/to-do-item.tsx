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
import { Grid } from "@mui/material";
import { formatDate, formatTime } from "./utils";

const ToDoItem = ({
	item: { title, description, complete, deadline },
}: {
	item: Items;
}) => {
	const deadlineDate = formatDate(deadline);
	const deadlineTime = formatTime(deadline);
	return (
		<Card className={styles.cardContainer}>
			<CardContent style={{ minHeight: 100 }}>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
				<hr />
				<Grid style={{ display: "flex", justifyContent: "space-between" }}>
					<Typography>Date</Typography>
					<Typography>{deadlineDate}</Typography>
				</Grid>
				<Grid style={{ display: "flex", justifyContent: "space-between" }}>
					<Typography>Time</Typography>
					<Typography>{deadlineTime}</Typography>
				</Grid>
				<FormControlLabel
					value={complete}
					control={<Checkbox checked={complete} />}
					label={complete ? "Done" : "Mark as done"}
					labelPlacement="end"
				/>
			</CardContent>
			<CardActions style={{ justifyContent: "space-between" }}>
				<Button size="small" variant="outlined">
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

export default ToDoItem;
