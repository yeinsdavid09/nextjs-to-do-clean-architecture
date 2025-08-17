//* Contracts
import { NotificationsDatasource } from "../../../domain/contracts/notifications.datasource";
import { NotificationsRepository } from "../../../domain/contracts/notifications.repository";

//* Interfaces
import {
  FindAllNotifications,
  Notifications,
  CreateNotifications,
  UpdateNotifications,
  RemoveNotifications,
  GetAllNotifications,
} from "../../../domain/interfaces/notifications.interfaces";

export class NotificationsRepositoryImpl implements NotificationsRepository {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private readonly _datasource: NotificationsDatasource) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  findAll(params?: GetAllNotifications): Promise<FindAllNotifications> {
    return this._datasource.findAll(params);
  }

  findOne(field: keyof Notifications, value: string): Promise<Notifications> {
    return this._datasource.findOne(field, value);
  }

  create(data: CreateNotifications): Promise<Notifications> {
    return this._datasource.create(data);
  }

  update(id: string, data: UpdateNotifications): Promise<Notifications> {
    return this._datasource.update(id, data);
  }

  remove(id: string): Promise<RemoveNotifications> {
    return this._datasource.remove(id);
  }

  //#endregion
}
