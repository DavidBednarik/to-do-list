import dayjs from "dayjs";
import SupportedDateFormats from "./supported-formats";

export const formatDate = (deadline: string) => {
	return dayjs(deadline).format(SupportedDateFormats.DATE);
};

export const formatTime = (deadline: string) => {
	return dayjs(deadline).format(SupportedDateFormats.TIME);
};
