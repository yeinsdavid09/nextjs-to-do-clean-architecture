//* Contracts
import { ToDoPrismaDatasourceImpl } from "../../infrastructure/implementations/datasources/prisma/to-do.datasource-impl";
import { ToDoRepositoryImpl } from "../../infrastructure/implementations/repositories/to-do.repository-impl";

//* Implementations
import { ToDoDatasource } from "../../domain/contracts/to-do.datasource";
import { ToDoRepository } from "../../domain/contracts/to-do.repository";

export const TO_DO_DATASOURCE: ToDoDatasource = new ToDoPrismaDatasourceImpl();
export const TO_DO_REPOSITORY: ToDoRepository = new ToDoRepositoryImpl(
  TO_DO_DATASOURCE
);
