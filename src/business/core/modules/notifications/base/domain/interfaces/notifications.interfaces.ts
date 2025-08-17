//* Interfaces
import { Pagination } from "@business/core/features/pagination/pagination.interfaces";
import { UserNotifications } from "@business/core/modules/users/content/user-notifications/interfaces/user-notifications.interfaces";

//#region --------------------------------- Types ---------------------------------

export type NotificationType = "INFO" | "WARNING" | "ERROR" | "SUCCESS";

//#endregion

//#region --------------------------------- Models ---------------------------------

export interface Notifications {
  id: string;
  key: string;
  type: NotificationType;
  content: any;
  userNotification?: UserNotifications[];
  createdAt: Date;
  updatedAt: Date;
}

export interface FindAllNotifications {
  total: number;
  data: Notifications[];
}

export interface GetAllNotifications extends Pagination {}

export interface CreateNotifications {
  key: string;
  type: NotificationType;
  content: any;
}

export interface UpdateNotifications {
  type?: NotificationType;
  content?: any;
}

export interface RemoveNotifications {
  id: string;
  message: string;
}

//#endregion
