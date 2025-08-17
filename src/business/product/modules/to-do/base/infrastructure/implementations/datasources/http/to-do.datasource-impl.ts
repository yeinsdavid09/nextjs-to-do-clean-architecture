//* Contracts
import { ToDoDatasource } from "../../../../domain/contracts/to-do.datasource";

//* Interfaces
import {
  FindAllToDos,
  ToDo,
  CreateToDos,
  UpdateToDos,
  RemoveToDos,
  GetAllToDos,
} from "../../../../domain/interfaces/to-do.interfaces";

export class ToDoHttpDatasourceImpl implements ToDoDatasource {
  //#region --------------------------------- Variables ---------------------------------

  private readonly _api: string = process.env.API_URL!;
  private readonly _endpoint: string = "to-do";

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  async findAll(params?: GetAllToDos): Promise<FindAllToDos> {
    const response = await fetch(`${this._api}/${this._endpoint}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  async findOne(field: keyof ToDo, value: string): Promise<ToDo> {
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

  async create(data: CreateToDos): Promise<ToDo> {
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

  async update(id: string, data: UpdateToDos): Promise<ToDo> {
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

  async remove(id: string): Promise<RemoveToDos> {
    const response = await fetch(`${this._api}/${this._endpoint}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  //#endregion
}
