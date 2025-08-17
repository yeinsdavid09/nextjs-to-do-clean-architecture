import { object, string } from "yup";

export const SignInDto = object({
  email: string().email().min(3).max(100).required(),
  password: string().uppercase().min(6).max(100).required(),
});

export const SignUpDto = object({
  email: string().email().min(3).max(100).required(),
  password: string().min(3).max(100).required(),
  name: string().min(3).max(100).required(),
});
