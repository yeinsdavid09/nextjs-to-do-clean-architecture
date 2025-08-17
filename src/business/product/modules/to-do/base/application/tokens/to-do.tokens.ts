//* Contracts
import { ToDoPrismaDatasourceImpl } from "../../infrastructure/implementations/datasources/prisma/to-do.datasource-impl";
import { ToDoRepositoryImpl } from "../../infrastructure/implementations/repositories/to-do.repository-impl";

//* Implementations
import { ToDoDatasource } from "../../domain/contracts/to-do.datasource";
import { ToDoRepository } from "../../domain/contracts/to-do.repository";

//* Use Cases
import { CreateToDoUseCase } from "../use-cases/create/create";
import { FindAllToDosUseCase } from "../use-cases/find-all/find-all";
import { FindOneToDoUseCase } from "../use-cases/find-one/find-one";
import { RemoveToDoUseCase } from "../use-cases/remove/remove";
import { UpdateToDoUseCase } from "../use-cases/update/update";

//#region --------------------------------- Implementations ---------------------------------

export const TO_DO_DATASOURCE: ToDoDatasource = new ToDoPrismaDatasourceImpl();
export const TO_DO_REPOSITORY: ToDoRepository = new ToDoRepositoryImpl(
  TO_DO_DATASOURCE
);

//#endregion

//#region --------------------------------- Use Cases ---------------------------------

export const findAllToDosUseCase = new FindAllToDosUseCase(TO_DO_REPOSITORY);
export const findOneToDoUseCase = new FindOneToDoUseCase(TO_DO_REPOSITORY);
export const createToDoUseCase = new CreateToDoUseCase(TO_DO_REPOSITORY);
export const updateToDoUseCase = new UpdateToDoUseCase(TO_DO_REPOSITORY);
export const removeToDoUseCase = new RemoveToDoUseCase(TO_DO_REPOSITORY);

//#endregion
