//* Interfaces
import {
  CreateToDos,
  FindAllToDos,
  GetAllToDos,
  RemoveToDos,
  ToDo,
  UpdateToDos,
} from "../interfaces/to-do.interfaces";

export interface ToDoDatasource {
  //#region --------------------------------- Methods ---------------------------------

  findAll(params?: GetAllToDos): Promise<FindAllToDos>;
  findOne(id: string): Promise<ToDo>;
  create(data: CreateToDos): Promise<ToDo>;
  update(id: string, data: UpdateToDos): Promise<ToDo>;
  remove(id: string): Promise<RemoveToDos>;

  //#endregion
}
