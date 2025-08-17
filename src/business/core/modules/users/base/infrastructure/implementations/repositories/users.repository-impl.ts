//* Contracts
import { UsersDatasource } from "../../../domain/contracts/users.datasource";
import { UsersRepository } from "../../../domain/contracts/users.repository";

//* Interfaces
import {
  FindAllUsers,
  Users,
  CreateUsers,
  UpdateUsers,
  RemoveUsers,
  GetAllUsers,
} from "../../../domain/interfaces/users.interfaces";

export class UsersRepositoryImpl implements UsersRepository {
  //#region --------------------------------- Hooks ---------------------------------

  constructor(private readonly _datasource: UsersDatasource) {}

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  findAll(params?: GetAllUsers): Promise<FindAllUsers> {
    return this._datasource.findAll(params);
  }

  findOne(field: keyof Users, value: string): Promise<Users> {
    return this._datasource.findOne(field, value);
  }

  create(data: CreateUsers): Promise<Users> {
    return this._datasource.create(data);
  }

  update(id: string, data: UpdateUsers): Promise<Users> {
    return this._datasource.update(id, data);
  }

  remove(id: string): Promise<RemoveUsers> {
    return this._datasource.remove(id);
  }

  //#endregion
}
