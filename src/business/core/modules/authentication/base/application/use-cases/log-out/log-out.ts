//* Contracts
import { AuthenticationRepository } from "../../../domain/contracts/authentication.repository";

//* Interfaces
import { LogOut } from "../../../domain/interfaces/authentication.interfaces";

export class LogOutUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: AuthenticationRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(id: string): Promise<LogOut> {
    return this._repository.logOut(id);
  }

  //#endregion
}
