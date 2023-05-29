import * as yup from "yup";

export const schema = yup.object().shape({
	title: yup.string().required(),
	description: yup.string().min(1).max(50).required(),
});
