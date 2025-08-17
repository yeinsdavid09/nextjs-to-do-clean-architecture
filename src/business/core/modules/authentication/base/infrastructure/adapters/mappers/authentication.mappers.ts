//* Interfaces
import {
  LogOut,
  Session,
  SignIn,
  SignUp,
} from "../../../domain/interfaces/authentication.interfaces";

export class AuthenticationMapper {
  //#region --------------------------------- Models ---------------------------------

  static toSession(response: Session): Session {
    return {};
  }

  static toSignUp(response: SignUp): SignUp {
    return {};
  }

  static toSignIn(response: SignIn): SignIn {
    return {};
  }

  static toLogOut(response: LogOut): LogOut {
    return {};
  }

  //#endregion
}
