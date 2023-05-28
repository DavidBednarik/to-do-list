import { Typography } from "@mui/material";
import React from "react";

type WarningMessage = {
	field: string;
};

const WarningMessage = ({ field }: WarningMessage) => {
	return (
		<Typography
			style={{ marginBottom: 10, fontSize: 12, color: "red" }}
		>{`${field} is required`}</Typography>
	);
};

export default WarningMessage;
