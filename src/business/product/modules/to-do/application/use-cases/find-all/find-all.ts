//* Contracts
import { ToDoRepository } from "../../../domain/contracts/to-do.repository";

//* Interfaces
import {
  FindAllToDos,
  ToDo,
} from "../../../domain/interfaces/to-do.interfaces";

export class FindAllToDosUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: ToDoRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(params?: FindAllToDos): Promise<ToDo> {
    const mappedParams: FindAllToDos | undefined = params;
    return this._repository.findAll(mappedParams);
  }

  //#endregion
}
