//* Contracts
import { UsersRepository } from "../../../domain/contracts/users.repository";

//* Interfaces
import { RemoveUsers } from "../../../domain/interfaces/users.interfaces";

export class RemoveUserUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: UsersRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(id: string): Promise<RemoveUsers> {
    return this._repository.remove(id);
  }

  //#endregion
}
