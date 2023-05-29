"use client";
import { Box, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAddItem } from "./add-item-hook";
import DateAndTimePicker from "./date-time-picker";
import LoadButton from "./loading-button";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import WarningMessage from "./warning-message";
import { style } from "./modal-style";
import { useQueryClient } from "react-query";

type ModalProps = {
	open: boolean;
	closeModal: () => void;
	categoryTitle: string;
};

export type FormValues = {
	title: string;
	description: string;
	categoryTitle: string;
};

const AddNewItemModal = ({ open, closeModal, categoryTitle }: ModalProps) => {
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
		register,
	} = useForm<FormValues>({
		defaultValues: {
			title: "",
			description: "",
		},
		resolver: yupResolver(schema),
	});
	const { addItem, loading, data: addedItem } = useAddItem();
	const [dateAndTime, setDateAndTime] = React.useState<Dayjs | null>(
		dayjs(new Date())
	);
	const queryClient = useQueryClient();

	useEffect(() => {
		if (!addedItem) {
			return;
		}
		queryClient.invalidateQueries(categoryTitle);
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
								{...register("title")}
								style={{ marginBottom: 10 }}
								id="title"
								label="Title"
								variant="outlined"
								fullWidth
								{...field}
							/>
						)}
					/>
					<WarningMessage field={errors.title?.message} />
					<Controller
						name="description"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<TextField
								style={{ marginBottom: 10 }}
								{...register("description")}
								id="description"
								label="Description"
								variant="outlined"
								fullWidth
								{...field}
							/>
						)}
					/>
					<WarningMessage field={errors.description?.message} />
					<DateAndTimePicker value={dateAndTime} setValue={setDateAndTime} />
					<LoadButton loading={loading} />
				</Box>
			</form>
		</Modal>
	);
};

export default AddNewItemModal;
