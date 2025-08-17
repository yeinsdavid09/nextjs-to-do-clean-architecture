//* Contracts
import { UsersRepository } from "../../../domain/contracts/users.repository";

//* Interfaces
import {
  UpdateUsers,
  Users,
} from "../../../domain/interfaces/users.interfaces";

export class UpdateUserUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: UsersRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(id: string, data: UpdateUsers): Promise<Users> {
    const mappedData: UpdateUsers = data;
    return this._repository.update(id, mappedData);
  }

  //#endregion
}
