//* Contracts
import { UsersDatasource } from "../../../../domain/contracts/users.datasource";

//* Interfaces
import {
  FindAllUsers,
  Users,
  CreateUsers,
  UpdateUsers,
  RemoveUsers,
  GetAllUsers,
} from "../../../../domain/interfaces/users.interfaces";

export class UsersHttpDatasourceImpl implements UsersDatasource {
  //#region --------------------------------- Variables ---------------------------------

  private readonly _api: string = process.env.API_URL!;
  private readonly _endpoint: string = "users";

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  async findAll(params?: GetAllUsers): Promise<FindAllUsers> {
    const response = await fetch(`${this._api}/${this._endpoint}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  async findOne(field: keyof Users, value: string): Promise<Users> {
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

  async create(data: CreateUsers): Promise<Users> {
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

  async update(id: string, data: UpdateUsers): Promise<Users> {
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

  async remove(id: string): Promise<RemoveUsers> {
    const response = await fetch(`${this._api}/${this._endpoint}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  //#endregion
}
