//* Contracts
import { RolesDatasource } from "../../../domain/contracts/roles.datasource";
import { RolesRepository } from "../../../domain/contracts/roles.repository";

//* Interfaces
import {
  FindAllRoles,
  Roles,
  CreateRoles,
  UpdateRoles,
  RemoveRoles,
  GetAllRoles,
} from "../../../domain/interfaces/roles.interfaces";

export class RolesRepositoryImpl implements RolesRepository {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private readonly _datasource: RolesDatasource) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  findAll(params?: GetAllRoles): Promise<FindAllRoles> {
    return this._datasource.findAll(params);
  }

  findOne(field: keyof Roles, value: string): Promise<Roles> {
    return this._datasource.findOne(field, value);
  }

  create(data: CreateRoles): Promise<Roles> {
    return this._datasource.create(data);
  }

  update(id: string, data: UpdateRoles): Promise<Roles> {
    return this._datasource.update(id, data);
  }

  remove(id: string): Promise<RemoveRoles> {
    return this._datasource.remove(id);
  }

  //#endregion
}
