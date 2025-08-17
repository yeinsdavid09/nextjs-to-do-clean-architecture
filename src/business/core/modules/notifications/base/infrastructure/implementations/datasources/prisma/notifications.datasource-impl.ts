import prisma from "@/lib/prisma";

//* Contracts
import { NotificationsDatasource } from "../../../../domain/contracts/notifications.datasource";

//* Interfaces
import {
  FindAllNotifications,
  Notifications,
  CreateNotifications,
  UpdateNotifications,
  RemoveNotifications,
  GetAllNotifications,
} from "../../../../domain/interfaces/notifications.interfaces";

//* Dtos
import {
  CreateNotificationsDto,
  UpdateNotificationsDto,
} from "./validations.dto";

export class NotificationsPrismaDatasourceImpl
  implements NotificationsDatasource
{
  //#region --------------------------------- Methods ---------------------------------

  async findAll(params?: GetAllNotifications): Promise<FindAllNotifications> {
    let take = params?.take;
    let skip = params?.skip;

    const [data, total] = await prisma.$transaction([
      prisma.notification.findMany({ take, skip }),
      prisma.notification.count(),
    ]);

    return { data, total };
  }

  async findOne(
    field: keyof Notifications,
    value: string
  ): Promise<Notifications> {
    const record = await prisma.notification.findFirst({
      where: { [field]: value },
    });

    if (!record) throw new Error("Record not found");

    return record;
  }

  async create(data: CreateNotifications): Promise<Notifications> {
    const body = await CreateNotificationsDto.validate(data);

    if (!body) throw new Error("Body is required");

    const record = await prisma.notification.create({ data: body });
    return record;
  }

  async update(id: string, data: UpdateNotifications): Promise<Notifications> {
    const recordExist = await prisma.notification.findFirst({ where: { id } });
    const body = await UpdateNotificationsDto.validate(data);

    if (!recordExist) throw new Error("Record not found");

    const record = await prisma.notification.update({
      where: { id },
      data: body,
    });

    return record;
  }

  async remove(id: string): Promise<RemoveNotifications> {
    const recordExist = await prisma.notification.findFirst({ where: { id } });

    if (!recordExist) throw new Error("Record not found");

    const record = await prisma.notification.delete({ where: { id } });
    return { id: record.id, message: "Record deleted succesfully" };
  }

  //#endregion
}
