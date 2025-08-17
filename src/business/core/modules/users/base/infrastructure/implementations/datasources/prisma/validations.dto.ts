import { object, string } from "yup";

export const CreateUsersDto = object({
  name: string().min(3).max(100).optional(),
  email: string().email().min(3).max(100).required(),
  image: string().min(3).max(100).optional(),
  password: string().uppercase().min(3).max(100).optional(),
  status: string().oneOf(["ACTIVE", "INACTIVE"]).optional(),
});

export const UpdateUsersDto = object({
  name: string().min(3).max(100).optional(),
  image: string().min(3).max(100).optional(),
  password: string().uppercase().min(3).max(100).optional(),
  status: string().oneOf(["ACTIVE", "INACTIVE"]).optional(),
});
