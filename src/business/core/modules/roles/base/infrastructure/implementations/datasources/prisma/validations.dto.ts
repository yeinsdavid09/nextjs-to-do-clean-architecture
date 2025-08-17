import { object, string } from "yup";

export const CreateRolesDto = object({
  name: string().min(3).max(100).optional(),
  email: string().email().min(3).max(100).required(),
  image: string().min(3).max(100).optional(),
});

export const UpdateRolesDto = object({
  name: string().min(3).max(100).optional(),
  image: string().min(3).max(100).optional(),
});
