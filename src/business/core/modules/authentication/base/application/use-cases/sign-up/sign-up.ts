//* Contracts
import { AuthenticationRepository } from "../../../domain/contracts/authentication.repository";

//* Interfaces
import {
  Session,
  SignUp,
} from "../../../domain/interfaces/authentication.interfaces";

export class SignUpUseCase {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private _repository: AuthenticationRepository) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  execute(data: SignUp): Promise<Session> {
    const mappedData: SignUp = data;
    return this._repository.signUp(mappedData);
  }

  //#endregion
}
