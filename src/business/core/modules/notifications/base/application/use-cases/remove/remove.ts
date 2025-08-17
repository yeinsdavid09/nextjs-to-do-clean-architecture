//* Contracts
import { NotificationsRepository } from "../../../domain/contracts/notifications.repository";

//* Interfaces
import { RemoveNotifications } from "../../../domain/interfaces/notifications.interfaces";

export class RemoveNotificationUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: NotificationsRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(id: string): Promise<RemoveNotifications> {
    return this._repository.remove(id);
  }

  //#endregion
}
