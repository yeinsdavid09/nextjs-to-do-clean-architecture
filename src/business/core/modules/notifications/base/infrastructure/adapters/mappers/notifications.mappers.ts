//* Interfaces
import {
  CreateNotifications,
  Notifications,
  UpdateNotifications,
} from "../../../domain/interfaces/notifications.interfaces";

export class ToDoMapper {
  //#region --------------------------------- Models ---------------------------------

  toModel(response: Notifications): Notifications {
    return {
      id: response.id,
      key: response.key,
      type: response.type,
      content: response.content,
      userNotification: response.userNotification,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    };
  }

  toCreateModel(response: CreateNotifications): CreateNotifications {
    return {
      key: response.key,
      type: response.type,
      content: response.content,
    };
  }

  toUpdateModel(response: UpdateNotifications): UpdateNotifications {
    return {
      type: response.type,
      content: response.content,
    };
  }

  //#endregion
}
