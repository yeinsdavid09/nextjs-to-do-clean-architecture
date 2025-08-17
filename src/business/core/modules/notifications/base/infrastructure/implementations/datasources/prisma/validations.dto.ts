import { object, string } from "yup";

export const CreateNotificationsDto = object({
  key: string().min(3).max(100).required(),
  type: string().oneOf(["INFO", "SUCCESS", "WARNING", "ERROR"]).optional(),
  content: object().json(),
});

export const UpdateNotificationsDto = object({
  type: string().oneOf(["INFO", "SUCCESS", "WARNING", "ERROR"]).optional(),
  content: object().json(),
});
