//* Interfaces
import { Notifications } from "@business/core/modules/notifications/base/domain/interfaces/notifications.interfaces";
import { Users } from "../../../base/domain/interfaces/users.interfaces";

export interface UserNotifications {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  notificationId: string;
  user: Users;
  notification: Notifications;
}
