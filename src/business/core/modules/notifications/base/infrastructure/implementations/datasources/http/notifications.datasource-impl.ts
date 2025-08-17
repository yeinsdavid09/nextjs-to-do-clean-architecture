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

export class NotificationsHttpDatasourceImpl
  implements NotificationsDatasource
{
  //#region --------------------------------- Variables ---------------------------------

  private readonly _api: string = process.env.API_URL!;
  private readonly _endpoint: string = "notifications";

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  async findAll(params?: GetAllNotifications): Promise<FindAllNotifications> {
    const response = await fetch(`${this._api}/${this._endpoint}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  async findOne(
    field: keyof Notifications,
    value: string
  ): Promise<Notifications> {
    const params = new URLSearchParams({ field: String(field), value });
    const response = await fetch(
      `${this._api}/${this._endpoint}/find?${params.toString()}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  async create(data: CreateNotifications): Promise<Notifications> {
    const response = await fetch(`${this._api}/${this._endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  async update(id: string, data: UpdateNotifications): Promise<Notifications> {
    const response = await fetch(`${this._api}/${this._endpoint}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  async remove(id: string): Promise<RemoveNotifications> {
    const response = await fetch(`${this._api}/${this._endpoint}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  //#endregion
}
