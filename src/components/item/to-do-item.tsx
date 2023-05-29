"use client";
import { Items } from "@/models/item";
import styles from "./item.module.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid } from "@mui/material";
import { formatDate, formatTime } from "./utils";
import { useRemoveItem } from "./remove-item/remove-item-hook";
import { useRouter } from "next/navigation";
import LoadingButton from "@mui/lab/LoadingButton";
import { useMarkTaskAsDone } from "./mark-task-as-done/use-mark-task-as-done";
import { useQueryClient } from "react-query";

type ToDo = {
	item: Items;
};

const ToDoItem = ({ item }: ToDo) => {
	const { title, description, complete, deadline, id, category } = item;
	const router = useRouter();
	const { removeItem, loading } = useRemoveItem();
	const { markTaskAsDone } = useMarkTaskAsDone();
	const [status, setStatus] = useState(complete);
	const deadlineDate = formatDate(deadline);
	const deadlineTime = formatTime(deadline);

	const queryClient = useQueryClient();

	const handleRemoveItem = async () => {
		await removeItem(id);
		router.refresh();
		queryClient.invalidateQueries(category);
	};

	const checkboxLabel = status ? "Done" : "Mark as done";

	const handleChangeStatus = async () => {
		setStatus(!complete);
		await markTaskAsDone(item);
		queryClient.invalidateQueries(category);
	};

	return (
		<Card className={styles.cardContainer}>
			<CardContent style={{ minHeight: 100, padding: 5 }}>
				<Typography gutterBottom variant="h6" component="div" fontSize={"18px"}>
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
				<hr />
				<Grid
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Typography style={{ fontSize: 14 }}>Date:</Typography>
					<Typography style={{ fontSize: 14 }}>{deadlineDate}</Typography>
				</Grid>
				<Grid style={{ display: "flex", justifyContent: "space-between" }}>
					<Typography style={{ fontSize: 14 }}>Time:</Typography>
					<Typography style={{ fontSize: 14 }}>{deadlineTime}</Typography>
				</Grid>
				<FormControlLabel
					value={complete}
					control={<Checkbox checked={status} onChange={handleChangeStatus} />}
					label={
						<Typography style={{ fontSize: 14 }}>{checkboxLabel}</Typography>
					}
					labelPlacement="end"
				/>
			</CardContent>
			<CardActions style={{ justifyContent: "space-between" }}>
				<LoadingButton
					onClick={handleRemoveItem}
					size="small"
					id="my-form"
					loading={loading}
					variant="outlined"
				>
					<span>Remove</span>
				</LoadingButton>
			</CardActions>
		</Card>
	);
};

export default ToDoItem;
