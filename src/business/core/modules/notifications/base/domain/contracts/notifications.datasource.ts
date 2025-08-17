//* Interfaces
import {
  CreateNotifications,
  FindAllNotifications,
  GetAllNotifications,
  RemoveNotifications,
  Notifications,
  UpdateNotifications,
} from "../interfaces/notifications.interfaces";

export interface NotificationsDatasource {
  //#region --------------------------------- Methods ---------------------------------

  findAll(params?: GetAllNotifications): Promise<FindAllNotifications>;
  findOne(field: keyof Notifications, value: string): Promise<Notifications>;
  create(data: CreateNotifications): Promise<Notifications>;
  update(id: string, data: UpdateNotifications): Promise<Notifications>;
  remove(id: string): Promise<RemoveNotifications>;

  //#endregion
}
