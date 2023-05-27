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
	borderRadius: 5,
	boxShadow: 24,
	p: 4,
};

const AddNewItem = ({ open, closeModal }: ModalProps) => {
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
						Add new item
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
							//value={age}
							label="Age"
							//onChange={handleChange}
						>
							<MenuItem value={10}>Shop</MenuItem>
							<MenuItem value={20}>Work</MenuItem>
							<MenuItem value={30}>Home</MenuItem>
						</Select>
					</FormControl>
					<Button variant="outlined" fullWidth>
						Add
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default AddNewItem;
