//* Contracts
import { ToDoRepository } from "../../../domain/contracts/to-do.repository";

//* Interfaces
import { UpdateToDos, ToDo } from "../../../domain/interfaces/to-do.interfaces";

export class UpdateToDoUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: ToDoRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(id: string, data: UpdateToDos): Promise<ToDo> {
    const mappedData: UpdateToDos = data;
    return this._repository.update(id, mappedData);
  }

  //#endregion
}
