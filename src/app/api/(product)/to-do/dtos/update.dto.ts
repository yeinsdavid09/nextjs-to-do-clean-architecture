import { boolean, date, object, string } from "yup";

export const UpdateToDoDto = object({
  description: string().min(3).max(250).optional(),
  completed: boolean().optional(),
  createdAt: date().optional(),
});
