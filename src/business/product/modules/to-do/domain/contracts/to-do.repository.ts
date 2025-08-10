//* Interfaces
import {
  CreateToDos,
  FindAllToDos,
  RemoveToDos,
  ToDo,
  UpdateToDos,
} from "../interfaces/to-do.interfaces";

export interface ToDoRepository {
  //#region --------------------------------- Methods ---------------------------------

  findAll(params?: FindAllToDos): Promise<ToDo>;
  findOne(id: string): Promise<ToDo>;
  create(data: CreateToDos): Promise<ToDo>;
  update(id: string, data: UpdateToDos): Promise<ToDo>;
  remove(id: string): Promise<RemoveToDos>;

  //#endregion
}
