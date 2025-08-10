//* Contracts
import { ToDoRepository } from "../../../domain/contracts/to-do.repository";

//* Interfaces
import { RemoveToDos } from "../../../domain/interfaces/to-do.interfaces";

export class RemoveToDoUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: ToDoRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(id: string): Promise<RemoveToDos> {
    return this._repository.remove(id);
  }

  //#endregion
}
