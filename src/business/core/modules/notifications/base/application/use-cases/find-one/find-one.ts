//* Contracts
import { NotificationsRepository } from "../../../domain/contracts/notifications.repository";

//* Interfaces
import { Notifications } from "../../../domain/interfaces/notifications.interfaces";

export class FindOneNotificationUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: NotificationsRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(field: keyof Notifications, value: string): Promise<Notifications> {
    return this._repository.findOne(field, value);
  }

  //#endregion
}
