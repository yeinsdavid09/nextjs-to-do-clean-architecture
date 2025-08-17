//* Contracts
import { NotificationsRepository } from "../../../domain/contracts/notifications.repository";

//* Interfaces
import {
  CreateNotifications,
  Notifications,
} from "../../../domain/interfaces/notifications.interfaces";

export class CreateNotificationUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: NotificationsRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(data: CreateNotifications): Promise<Notifications> {
    const mappedData: CreateNotifications = data;
    return this._repository.create(mappedData);
  }

  //#endregion
}
