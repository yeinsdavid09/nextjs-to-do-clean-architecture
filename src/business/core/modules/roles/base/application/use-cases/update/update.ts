//* Contracts
import { RolesRepository } from "../../../domain/contracts/roles.repository";

//* Interfaces
import {
  UpdateRoles,
  Roles,
} from "../../../domain/interfaces/roles.interfaces";

export class UpdateRoleUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: RolesRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(id: string, data: UpdateRoles): Promise<Roles> {
    const mappedData: UpdateRoles = data;
    return this._repository.update(id, mappedData);
  }

  //#endregion
}
