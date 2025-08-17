//* Contracts
import { NotificationsPrismaDatasourceImpl } from "../../infrastructure/implementations/datasources/prisma/notifications.datasource-impl";
import { NotificationsRepositoryImpl } from "../../infrastructure/implementations/repositories/notifications.repository-impl";

//* Implementations
import { NotificationsDatasource } from "../../domain/contracts/notifications.datasource";
import { NotificationsRepository } from "../../domain/contracts/notifications.repository";

//* Use Cases
import { CreateNotificationUseCase } from "../use-cases/create/create";
import { FindAllNotificationsUseCase } from "../use-cases/find-all/find-all";
import { FindOneNotificationUseCase } from "../use-cases/find-one/find-one";
import { RemoveNotificationUseCase } from "../use-cases/remove/remove";
import { UpdateNotificationUseCase } from "../use-cases/update/update";

//#region --------------------------------- Implementations ---------------------------------

export const NOTIFICATIONS_DATASOURCE: NotificationsDatasource =
  new NotificationsPrismaDatasourceImpl();
export const NOTIFICATIONS_REPOSITORY: NotificationsRepository =
  new NotificationsRepositoryImpl(NOTIFICATIONS_DATASOURCE);

//#endregion

//#region --------------------------------- Use Cases ---------------------------------

export const findAllNotificationsUseCase = new FindAllNotificationsUseCase(
  NOTIFICATIONS_REPOSITORY
);
export const findOneNotificationUseCase = new FindOneNotificationUseCase(
  NOTIFICATIONS_REPOSITORY
);
export const createNotificationUseCase = new CreateNotificationUseCase(
  NOTIFICATIONS_REPOSITORY
);
export const updateNotificationUseCase = new UpdateNotificationUseCase(
  NOTIFICATIONS_REPOSITORY
);
export const removeNotificationUseCase = new RemoveNotificationUseCase(
  NOTIFICATIONS_REPOSITORY
);

//#endregion
