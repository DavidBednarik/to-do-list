"use client";
import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Category } from "@/models/category";
import WarningMessage from "./warning-message";
import { useAddItem } from "./add-item-hook";
import { useRouter } from "next/navigation";
import DateAndTimePicker from "./date-time-picker";
import LoadButton from "./loading-button";

type ModalProps = {
	open: boolean;
	closeModal: () => void;
	categories: Category[];
};
const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "1px solid grey",
	borderRadius: 3,
	boxShadow: 24,
	p: 4,
};

export type FormValues = {
	title: string;
	description: string;
	category: string;
};

const AddNewItem = ({ open, closeModal, categories }: ModalProps) => {
	const router = useRouter();
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			title: "",
			description: "",
			category: "",
		},
	});
	const { addItem, loading, data: addedItem } = useAddItem();
	const [dateAndTime, setDateAndTime] = React.useState<Dayjs | null>(
		dayjs("2022-04-17T15:30")
	);

	useEffect(() => {
		if (!addedItem) {
			return;
		}
		closeModal();
		reset();
		router.refresh();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [addedItem]);

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		if (data) {
			await addItem(data, dateAndTime);
		}
	};

	console.log("✅", dayjs(dateAndTime).format());

	return (
		<div>
			<Modal
				open={open}
				onClose={closeModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<form onSubmit={handleSubmit(onSubmit)} id="my-form">
					<Box sx={style}>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
							style={{ textAlign: "center", marginBottom: 20 }}
						>
							Add new task
						</Typography>

						<Controller
							name="title"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<TextField
									style={{ marginBottom: 10 }}
									id="title"
									label="Title"
									variant="outlined"
									fullWidth
									{...field}
								/>
							)}
						/>
						{errors.title?.type === "required" && (
							<WarningMessage field={"Title"} />
						)}
						<Controller
							name="description"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<TextField
									style={{ marginBottom: 10 }}
									id="description"
									label="Description"
									variant="outlined"
									fullWidth
									{...field}
								/>
							)}
						/>
						{errors.description?.type === "required" && (
							<WarningMessage field={"Description"} />
						)}
						<Controller
							name="category"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<FormControl fullWidth>
									<InputLabel id="select-category">Category</InputLabel>
									<Select
										style={{ marginBottom: 10 }}
										fullWidth
										labelId="category"
										id="category"
										defaultValue={"Shop"}
										label="Category"
										{...field}
										variant="outlined"
									>
										{categories.map((menu) => (
											<MenuItem value={menu.title} key={menu.id}>
												{menu.title}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							)}
						/>
						{errors.category?.type === "required" && (
							<WarningMessage field={"Category"} />
						)}
						<DateAndTimePicker value={dateAndTime} setValue={setDateAndTime} />
						<LoadButton loading={loading} />
					</Box>
				</form>
			</Modal>
		</div>
	);
};

export default AddNewItem;
