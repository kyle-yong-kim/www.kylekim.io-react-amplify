import * as yup from "yup";

export const emailSchema = yup.object().shape({
    // email: yup.string().email().required()
    email: yup.string().required().email()
});