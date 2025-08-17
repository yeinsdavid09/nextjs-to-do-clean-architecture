//* Contracts
import { AuthenticationDatasource } from "../../../domain/contracts/authentication.datasource";
import { AuthenticationRepository } from "../../../domain/contracts/authentication.repository";

//* Interfaces
import {
  LogOut,
  Session,
  SignIn,
  SignUp,
} from "../../../domain/interfaces/authentication.interfaces";

export class AuthenticationRepositoryImpl implements AuthenticationRepository {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private readonly _datasource: AuthenticationDatasource) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  signIn(data: SignIn): Promise<Session> {
    return this._datasource.signIn(data);
  }

  signUp(data: SignUp): Promise<Session> {
    return this._datasource.signUp(data);
  }

  logOut(id: string): Promise<LogOut> {
    return this._datasource.logOut(id);
  }

  //#endregion
}
