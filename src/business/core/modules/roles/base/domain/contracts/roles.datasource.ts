//* Interfaces
import {
  CreateRoles,
  FindAllRoles,
  GetAllRoles,
  RemoveRoles,
  Roles,
  UpdateRoles,
} from "../interfaces/roles.interfaces";

export interface RolesDatasource {
  //#region --------------------------------- Methods ---------------------------------

  findAll(params?: GetAllRoles): Promise<FindAllRoles>;
  findOne(field: keyof Roles, value: string): Promise<Roles>;
  create(data: CreateRoles): Promise<Roles>;
  update(id: string, data: UpdateRoles): Promise<Roles>;
  remove(id: string): Promise<RemoveRoles>;

  //#endregion
}
