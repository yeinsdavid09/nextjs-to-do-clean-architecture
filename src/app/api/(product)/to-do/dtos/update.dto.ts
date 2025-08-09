import { date, object, string } from "yup";

export const UpdateToDoDto = object({
  title: string().min(3).max(100).optional(),
  description: string().min(3).max(250).optional(),
  status: string()
    .oneOf(["IN_PROGRESS", "DONE", "CANCELED", "BACKLOG"])
    .optional(),
  priority: string().oneOf(["LOW", "MEDIUM", "HIGH"]).optional(),
  createdAt: date().optional(),
});
