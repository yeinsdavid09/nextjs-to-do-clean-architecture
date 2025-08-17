//* Contracts
import { UsersRepository } from "../../../domain/contracts/users.repository";

//* Interfaces
import {
  FindAllUsers,
  GetAllUsers,
} from "../../../domain/interfaces/users.interfaces";

export class FindAllUsersUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: UsersRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(params?: GetAllUsers): Promise<FindAllUsers> {
    const mappedParams: GetAllUsers | undefined = params;
    return this._repository.findAll(mappedParams);
  }

  //#endregion
}
