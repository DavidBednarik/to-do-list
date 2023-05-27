import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";

type ModalProps = {
	open: boolean;
	closeModal: () => void;
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

const AddNewItem = ({ open, closeModal }: ModalProps) => {
	const [value, setValue] = React.useState<Dayjs | null>(
		dayjs("2022-04-17T15:30")
	);

	console.log("✅", dayjs(value).format());

	return (
		<div>
			<Modal
				open={open}
				onClose={closeModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						style={{ textAlign: "center" }}
					>
						Add new task
					</Typography>
					<Box component="form" noValidate autoComplete="off">
						<TextField
							style={{ marginBottom: 10 }}
							id="outlined-basic"
							label="Title"
							variant="outlined"
							fullWidth
						/>
						<TextField
							style={{ marginBottom: 10 }}
							id="outlined-basic"
							label="Description"
							variant="outlined"
							fullWidth
						/>
					</Box>
					<FormControl fullWidth>
						<InputLabel id="category">Category</InputLabel>
						<Select
							labelId="category"
							id="category"
							defaultValue={""}
							//value={age}
							label="Age"
							//onChange={handleChange}
						>
							<MenuItem value={"Shop"}>Shop</MenuItem>
							<MenuItem value={"Work"}>Work</MenuItem>
							<MenuItem value={"Home"}>Home</MenuItem>
						</Select>
					</FormControl>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DemoContainer components={["DateTimePicker"]}>
							<DateTimePicker
								label="Pick date and time"
								ampm={false}
								value={value ?? null}
								onChange={(newValue) => setValue(newValue)}
							/>
						</DemoContainer>
					</LocalizationProvider>
					<Button variant="outlined" fullWidth sx={{ marginTop: 5 }}>
						Add
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default AddNewItem;
