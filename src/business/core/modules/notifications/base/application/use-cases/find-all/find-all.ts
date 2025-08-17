//* Contracts
import { NotificationsRepository } from "../../../domain/contracts/notifications.repository";

//* Interfaces
import {
  FindAllNotifications,
  GetAllNotifications,
} from "../../../domain/interfaces/notifications.interfaces";

export class FindAllNotificationsUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: NotificationsRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(params?: GetAllNotifications): Promise<FindAllNotifications> {
    const mappedParams: GetAllNotifications | undefined = params;
    return this._repository.findAll(mappedParams);
  }

  //#endregion
}
