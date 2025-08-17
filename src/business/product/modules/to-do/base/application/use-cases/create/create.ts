//* Contracts
import { ToDoRepository } from "../../../domain/contracts/to-do.repository";

//* Interfaces
import { CreateToDos, ToDo } from "../../../domain/interfaces/to-do.interfaces";

export class CreateToDoUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: ToDoRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(data: CreateToDos): Promise<ToDo> {
    const mappedData: CreateToDos = data;
    return this._repository.create(mappedData);
  }

  //#endregion
}
