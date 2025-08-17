//* Contracts
import { AuthenticationDatasource } from "../../../../domain/contracts/authentication.datasource";

//* Interfaces
import {
  SignUp,
  LogOut,
  SignIn,
  Session,
} from "../../../../domain/interfaces/authentication.interfaces";

export class AuthenticationHttpDatasourceImpl
  implements AuthenticationDatasource
{
  //#region --------------------------------- Variables ---------------------------------

  private readonly _api: string = process.env.API_URL!;
  private readonly _endpoint: string = "authentication";

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  async signIn(data: SignIn): Promise<Session> {
    const response = await fetch(`${this._api}/${this._endpoint}/sign-in`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  async signUp(data: SignUp): Promise<Session> {
    const response = await fetch(`${this._api}/${this._endpoint}/sign-up`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  async logOut(id: string): Promise<LogOut> {
    const response = await fetch(
      `${this._api}/${this._endpoint}/${id}/log-out`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return response;
  }

  //#endregion
}
