//* Contracts
import { ToDoDatasource } from "../../../domain/contracts/to-do.datasource";
import { ToDoRepository } from "../../../domain/contracts/to-do.repository";

//* Interfaces
import {
  FindAllToDos,
  ToDo,
  CreateToDos,
  UpdateToDos,
  RemoveToDos,
  GetAllToDos,
} from "../../../domain/interfaces/to-do.interfaces";

export class ToDoRepositoryImpl implements ToDoRepository {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private readonly _datasource: ToDoDatasource) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  findAll(params?: GetAllToDos): Promise<FindAllToDos> {
    return this._datasource.findAll(params);
  }

  findOne(field: keyof ToDo, value: string): Promise<ToDo> {
    return this._datasource.findOne(field, value);
  }

  create(data: CreateToDos): Promise<ToDo> {
    return this._datasource.create(data);
  }

  update(id: string, data: UpdateToDos): Promise<ToDo> {
    return this._datasource.update(id, data);
  }

  remove(id: string): Promise<RemoveToDos> {
    return this._datasource.remove(id);
  }

  //#endregion
}
