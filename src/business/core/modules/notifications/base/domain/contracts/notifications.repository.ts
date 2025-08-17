//* Interfaces
import {
  CreateNotifications,
  FindAllNotifications,
  RemoveNotifications,
  Notifications,
  UpdateNotifications,
  GetAllNotifications,
} from "../interfaces/notifications.interfaces";

export interface NotificationsRepository {
  //#region --------------------------------- Methods ---------------------------------

  findAll(params?: GetAllNotifications): Promise<FindAllNotifications>;
  findOne(field: keyof Notifications, value: string): Promise<Notifications>;
  create(data: CreateNotifications): Promise<Notifications>;
  update(id: string, data: UpdateNotifications): Promise<Notifications>;
  remove(id: string): Promise<RemoveNotifications>;

  //#endregion
}
