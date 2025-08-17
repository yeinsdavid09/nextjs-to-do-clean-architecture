//* Contracts
import { UsersRepository } from "../../../domain/contracts/users.repository";

//* Interfaces
import { Users } from "../../../domain/interfaces/users.interfaces";

export class FindOneUserUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: UsersRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(field: keyof Users, value: string): Promise<Users> {
    return this._repository.findOne(field, value);
  }

  //#endregion
}
