//* Contracts
import { UsersPrismaDatasourceImpl } from "../../infrastructure/implementations/datasources/prisma/users.datasource-impl";
import { UsersRepositoryImpl } from "../../infrastructure/implementations/repositories/users.repository-impl";

//* Implementations
import { UsersDatasource } from "../../domain/contracts/users.datasource";
import { UsersRepository } from "../../domain/contracts/users.repository";

//* Use Cases
import { FindAllUsersUseCase } from "../use-cases/find-all/find-all";
import { FindOneUserUseCase } from "../use-cases/find-one/find-one";
import { CreateUserUseCase } from "../use-cases/create/create";
import { UpdateUserUseCase } from "../use-cases/update/update";
import { RemoveUserUseCase } from "../use-cases/remove/remove";

//#region --------------------------------- Implementations ---------------------------------

export const USERS_DATASOURCE: UsersDatasource =
  new UsersPrismaDatasourceImpl();
export const USERS_REPOSITORY: UsersRepository = new UsersRepositoryImpl(
  USERS_DATASOURCE
);

//#endregion

//#region --------------------------------- Use Cases ---------------------------------

export const findAllUsersUseCase = new FindAllUsersUseCase(USERS_REPOSITORY);
export const findOneUserUseCase = new FindOneUserUseCase(USERS_REPOSITORY);
export const createUserUseCase = new CreateUserUseCase(USERS_REPOSITORY);
export const updateUserUseCase = new UpdateUserUseCase(USERS_REPOSITORY);
export const removeUserUseCase = new RemoveUserUseCase(USERS_REPOSITORY);

//#endregion
