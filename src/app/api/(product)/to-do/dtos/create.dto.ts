import { boolean, object, string } from "yup";

export const CreateToDoDto = object({
  description: string().required().min(3).max(250),
  completed: boolean().optional().default(false),
});
