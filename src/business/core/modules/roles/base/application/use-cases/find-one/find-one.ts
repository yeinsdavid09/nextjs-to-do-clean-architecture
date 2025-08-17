//* Contracts
import { RolesRepository } from "../../../domain/contracts/roles.repository";

//* Interfaces
import { Roles } from "../../../domain/interfaces/roles.interfaces";

export class FindOneRoleUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: RolesRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(field: keyof Roles, value: string): Promise<Roles> {
    return this._repository.findOne(field, value);
  }

  //#endregion
}
