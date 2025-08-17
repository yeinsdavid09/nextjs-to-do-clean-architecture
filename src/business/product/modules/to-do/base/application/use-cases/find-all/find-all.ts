//* Contracts
import { ToDoRepository } from "../../../domain/contracts/to-do.repository";

//* Interfaces
import {
  FindAllToDos,
  GetAllToDos,
} from "../../../domain/interfaces/to-do.interfaces";

export class FindAllToDosUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: ToDoRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(params?: GetAllToDos): Promise<FindAllToDos> {
    const mappedParams: GetAllToDos | undefined = params;
    return this._repository.findAll(mappedParams);
  }

  //#endregion
}
