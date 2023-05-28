"use client";
import { Items } from "@/models/item";
import styles from "./item.module.css";
import React from "react";
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

const ToDoItem = ({
	item: { title, description, complete, deadline, id },
}: {
	item: Items;
}) => {
	const router = useRouter();
	const { removeItem, loading } = useRemoveItem();
	const deadlineDate = formatDate(deadline);
	const deadlineTime = formatTime(deadline);

	const handleRemoveItem = async () => {
		await removeItem(id);
		router.refresh();
	};

	const checkboxLabel = complete ? "Done" : "Mark as done";

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
				<Grid
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
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
					label={checkboxLabel}
					labelPlacement="end"
				/>
			</CardContent>
			<CardActions style={{ justifyContent: "space-between" }}>
				<LoadingButton
					onClick={handleRemoveItem}
					style={{ marginTop: 10 }}
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
