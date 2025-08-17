//* Contracts
import { AuthenticationPrismaDatasourceImpl } from "../../infrastructure/implementations/datasources/prisma/authentication.datasource-impl";
import { AuthenticationRepositoryImpl } from "../../infrastructure/implementations/repositories/authentication.repository-impl";

//* Implementations
import { AuthenticationDatasource } from "../../domain/contracts/authentication.datasource";
import { AuthenticationRepository } from "../../domain/contracts/authentication.repository";

//* Use Cases
import { LogOutUseCase } from "../use-cases/log-out/log-out";
import { SignInUseCase } from "../use-cases/sign-in/sign-in";
import { SignUpUseCase } from "../use-cases/sign-up/sign-up";

//#region --------------------------------- Implementations ---------------------------------

export const AUTHENTICATION_DATASOURCE: AuthenticationDatasource =
  new AuthenticationPrismaDatasourceImpl();
export const AUTHENTICATION_REPOSITORY: AuthenticationRepository =
  new AuthenticationRepositoryImpl(AUTHENTICATION_DATASOURCE);

//#endregion

//#region --------------------------------- Use Cases ---------------------------------

export const signInUseCase = new SignInUseCase(AUTHENTICATION_REPOSITORY);
export const signUpUseCase = new SignUpUseCase(AUTHENTICATION_REPOSITORY);
export const logOutUseCase = new LogOutUseCase(AUTHENTICATION_REPOSITORY);

//#endregion
