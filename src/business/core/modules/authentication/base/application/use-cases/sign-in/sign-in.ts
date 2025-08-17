//* Contracts
import { AuthenticationRepository } from "../../../domain/contracts/authentication.repository";

//* Interfaces
import {
  Session,
  SignIn,
} from "../../../domain/interfaces/authentication.interfaces";

export class SignInUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: AuthenticationRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(data: SignIn): Promise<Session> {
    return this._repository.signIn(data);
  }

  //#endregion
}
