//* Interfaces
import {
  LogOut,
  Session,
  SignIn,
  SignUp,
} from "../interfaces/authentication.interfaces";

export interface AuthenticationDatasource {
  //#region --------------------------------- Methods ---------------------------------

  signIn(data: SignIn): Promise<Session>;
  signUp(data: SignUp): Promise<Session>;
  logOut(id: string): Promise<LogOut>;

  //#endregion
}
