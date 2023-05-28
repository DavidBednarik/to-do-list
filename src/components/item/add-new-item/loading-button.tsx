import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";

type LoadButton = {
	loading: boolean;
};

const LoadButton = ({ loading }: LoadButton) => {
	return (
		<LoadingButton
			style={{ marginTop: 10 }}
			size="small"
			id="my-form"
			type="submit"
			fullWidth
			loading={loading}
			variant="outlined"
		>
			<span>Add</span>
		</LoadingButton>
	);
};

export default LoadButton;
