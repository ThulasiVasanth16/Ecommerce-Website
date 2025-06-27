import { object, string } from "yup";
import { LOGINVALIDATION } from "../constants/schema";

export const loginValidation = object({
  userName: string()
    .min(3,LOGINVALIDATION.USERNAME_VALIDATE)
    .required(LOGINVALIDATION.USERNAME_REQUIRED),
  email: string()
    .email(LOGINVALIDATION.EMAIL_VALIDATE)
    .required(LOGINVALIDATION.EMAIL_REQUIRED),
});

// import * as yup from "yup";

// export const loginValidation = yup.object().shape({
//   userName: yup
//     .string()
//     .min(3, "Username must be at least 3 characters long")
//     .required("UserName is required"),
//   email: yup
//     .string()
//     .email("please enter the valid email address.")
//     .required("Email is required"),
// });
