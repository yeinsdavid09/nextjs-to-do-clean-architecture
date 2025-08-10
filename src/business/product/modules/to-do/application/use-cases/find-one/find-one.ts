//* Contracts
import { ToDoRepository } from "../../../domain/contracts/to-do.repository";

//* Interfaces
import { ToDo } from "../../../domain/interfaces/to-do.interfaces";

export class FindOneToDoUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: ToDoRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(id: string): Promise<ToDo> {
    return this._repository.findOne(id);
  }

  //#endregion
}
