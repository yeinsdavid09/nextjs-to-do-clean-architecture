//* Contracts
import { RolesRepository } from "../../../domain/contracts/roles.repository";

//* Interfaces
import {
  CreateRoles,
  Roles,
} from "../../../domain/interfaces/roles.interfaces";

export class CreateRoleUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: RolesRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(data: CreateRoles): Promise<Roles> {
    const mappedData: CreateRoles = data;
    return this._repository.create(mappedData);
  }

  //#endregion
}
