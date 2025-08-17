//* Contracts
import { RolesRepository } from "../../../domain/contracts/roles.repository";

//* Interfaces
import { RemoveRoles } from "../../../domain/interfaces/roles.interfaces";

export class RemoveRoleUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: RolesRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(id: string): Promise<RemoveRoles> {
    return this._repository.remove(id);
  }

  //#endregion
}
