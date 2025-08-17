//* Contracts
import { RolesRepository } from "../../../domain/contracts/roles.repository";

//* Interfaces
import {
  FindAllRoles,
  GetAllRoles,
} from "../../../domain/interfaces/roles.interfaces";

export class FindAllRolesUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: RolesRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(params?: GetAllRoles): Promise<FindAllRoles> {
    const mappedParams: GetAllRoles | undefined = params;
    return this._repository.findAll(mappedParams);
  }

  //#endregion
}
