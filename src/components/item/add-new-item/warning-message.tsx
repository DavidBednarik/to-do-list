import { Typography } from "@mui/material";
import React from "react";

type WarningMessage = {
	field: string | undefined;
};

const WarningMessage = ({ field }: WarningMessage) => {
	return (
		<Typography style={{ marginBottom: 10, fontSize: 12, color: "red" }}>
			{field ?? ""}
		</Typography>
	);
};

export default WarningMessage;
