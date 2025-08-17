//* Contracts
import { UsersRepository } from "../../../domain/contracts/users.repository";

//* Interfaces
import {
  CreateUsers,
  Users,
} from "../../../domain/interfaces/users.interfaces";

export class CreateUserUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: UsersRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(data: CreateUsers): Promise<Users> {
    const mappedData: CreateUsers = data;
    return this._repository.create(mappedData);
  }

  //#endregion
}
