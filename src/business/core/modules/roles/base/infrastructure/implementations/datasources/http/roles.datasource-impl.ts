//* Contracts
import { RolesDatasource } from "../../../../domain/contracts/roles.datasource";

//* Interfaces
import {
  FindAllRoles,
  Roles,
  CreateRoles,
  UpdateRoles,
  RemoveRoles,
  GetAllRoles,
} from "../../../../domain/interfaces/roles.interfaces";

export class RolesHttpDatasourceImpl implements RolesDatasource {
  //#region --------------------------------- Variables ---------------------------------

  private readonly _api: string = process.env.API_URL!;
  private readonly _endpoint: string = "roles";

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  async findAll(params?: GetAllRoles): Promise<FindAllRoles> {
    const response = await fetch(`${this._api}/${this._endpoint}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  async findOne(field: keyof Roles, value: string): Promise<Roles> {
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

  async create(data: CreateRoles): Promise<Roles> {
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

  async update(id: string, data: UpdateRoles): Promise<Roles> {
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

  async remove(id: string): Promise<RemoveRoles> {
    const response = await fetch(`${this._api}/${this._endpoint}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  //#endregion
}
