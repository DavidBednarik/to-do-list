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
import WarningMessage from "./warning-message";
import { useAddItem } from "./add-item-hook";

import DateAndTimePicker from "./date-time-picker";
import LoadButton from "./loading-button";

type ModalProps = {
	open: boolean;
	closeModal: () => void;
	categoryTitle: string;
	getData: () => Promise<void>;
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
	categoryTitle: string;
};

const AddNewItemModal = ({
	open,
	closeModal,
	categoryTitle,
	getData,
}: ModalProps) => {
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			title: "",
			description: "",
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
		getData();
		closeModal();
		reset();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [addedItem]);

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		if (data) {
			await addItem(data, dateAndTime, categoryTitle);
		}
	};

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
						<DateAndTimePicker value={dateAndTime} setValue={setDateAndTime} />
						<LoadButton loading={loading} />
					</Box>
				</form>
			</Modal>
		</div>
	);
};

export default AddNewItemModal;
