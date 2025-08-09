import { boolean, object, string } from "yup";

export const CreateToDoDto = object({
  title: string().required().min(3).max(100),
  description: string().required().min(3).max(250).optional(),
  status: string()
    .oneOf(["IN_PROGRESS", "DONE", "CANCELED", "BACKLOG"])
    .optional(),
  priority: string().oneOf(["LOW", "MEDIUM", "HIGH"]).optional(),
});
