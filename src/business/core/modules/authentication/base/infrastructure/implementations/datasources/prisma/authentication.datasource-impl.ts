import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";

//* Contracts
import { AuthenticationDatasource } from "../../../../domain/contracts/authentication.datasource";

//* Interfaces
import {
  SignUp,
  LogOut,
  SignIn,
  Session,
} from "../../../../domain/interfaces/authentication.interfaces";

//* Dtos
import { SignUpDto, SignInDto } from "./validations.dto";

//* Use Cases
import {
  createUserUseCase,
  findOneUserUseCase,
} from "@business/core/modules/users/base/application/tokens/users.tokens";

export class AuthenticationPrismaDatasourceImpl
  implements AuthenticationDatasource
{
  //#region --------------------------------- Methods ---------------------------------

  async signIn(data: SignIn): Promise<Session> {
    const body = await SignInDto.validate(data);
    if (!body) throw new Error("Body is required");

    const record = await findOneUserUseCase.execute("email", body.email);
    const checkPassword = compare(body.password, record.password!);
    if (!checkPassword) throw new Error("Wrong Password");

    const mappedRecord = {
      ...record,
      password: undefined,
    };

    return { user: mappedRecord };
  }

  async signUp(data: SignUp): Promise<Session> {
    const body = await SignUpDto.validate(data);
    if (!body) throw new Error("Body is required");

    const record = await createUserUseCase.execute(body);
    return { user: record };
  }

  async logOut(id: string): Promise<LogOut> {
    const recordExist = await prisma.user.findFirst({ where: { id } });

    if (!recordExist) throw new Error("Record not found");

    return {};
  }

  //#endregion
}
