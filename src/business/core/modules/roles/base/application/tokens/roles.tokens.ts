//* Contracts
import { RolesPrismaDatasourceImpl } from "../../infrastructure/implementations/datasources/prisma/roles.datasource-impl";
import { RolesRepositoryImpl } from "../../infrastructure/implementations/repositories/roles.repository-impl";

//* Implementations
import { RolesRepository } from "../../domain/contracts/roles.repository";
import { RolesDatasource } from "../../domain/contracts/roles.datasource";

//* Use Cases
import { CreateRoleUseCase } from "../use-cases/create/create";
import { FindAllRolesUseCase } from "../use-cases/find-all/find-all";
import { FindOneRoleUseCase } from "../use-cases/find-one/find-one";
import { RemoveRoleUseCase } from "../use-cases/remove/remove";
import { UpdateRoleUseCase } from "../use-cases/update/update";

//#region --------------------------------- Implementations ---------------------------------

export const ROLES_DATASOURCE: RolesDatasource =
  new RolesPrismaDatasourceImpl();
export const ROLES_REPOSITORY: RolesRepository = new RolesRepositoryImpl(
  ROLES_DATASOURCE
);

//#endregion

//#region --------------------------------- Use Cases ---------------------------------

export const findAllRolesUseCase = new FindAllRolesUseCase(ROLES_REPOSITORY);
export const findOneRoleUseCase = new FindOneRoleUseCase(ROLES_REPOSITORY);
export const createRoleUseCase = new CreateRoleUseCase(ROLES_REPOSITORY);
export const updateRoleUseCase = new UpdateRoleUseCase(ROLES_REPOSITORY);
export const removeRoleUseCase = new RemoveRoleUseCase(ROLES_REPOSITORY);

//#endregion
