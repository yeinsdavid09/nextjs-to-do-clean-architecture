//* Interfaces
import {
  CreateToDos,
  ToDo,
  UpdateToDos,
} from "../../../domain/interfaces/to-do.interfaces";

export class ToDoMapper {
  //#region --------------------------------- Models ---------------------------------

  static toModel(response: ToDo): ToDo {
    return {
      id: response.id,
      title: response.title,
      description: response.description,
      status: response.status,
      priority: response.priority,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    };
  }

  static toCreateModel(response: CreateToDos): CreateToDos {
    return {
      title: response.title,
      description: response.description,
      status: response.status,
      priority: response.priority,
      createdAt: response.createdAt,
    };
  }

  static toUpdateModel(response: UpdateToDos): UpdateToDos {
    return {
      title: response.title,
      description: response.description,
      status: response.status,
      priority: response.priority,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    };
  }

  //#endregion
}
