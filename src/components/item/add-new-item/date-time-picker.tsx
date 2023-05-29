import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

type DateTimePickerProps = {
	value: dayjs.Dayjs | null;
	setValue: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>;
};

const DateAndTimePicker = ({ value, setValue }: DateTimePickerProps) => {
	return (
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
	);
};

export default DateAndTimePicker;
