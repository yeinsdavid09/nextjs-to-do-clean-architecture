//* Contracts
import { NotificationsRepository } from "../../../domain/contracts/notifications.repository";

//* Interfaces
import {
  UpdateNotifications,
  Notifications,
} from "../../../domain/interfaces/notifications.interfaces";

export class UpdateNotificationUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: NotificationsRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(id: string, data: UpdateNotifications): Promise<Notifications> {
    const mappedData: UpdateNotifications = data;
    return this._repository.update(id, mappedData);
  }

  //#endregion
}
