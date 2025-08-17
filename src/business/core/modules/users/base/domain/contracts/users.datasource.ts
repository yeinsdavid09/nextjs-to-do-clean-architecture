//* Interfaces
import {
  CreateUsers,
  FindAllUsers,
  GetAllUsers,
  RemoveUsers,
  Users,
  UpdateUsers,
} from "../interfaces/users.interfaces";

export interface UsersDatasource {
  //#region --------------------------------- Methods ---------------------------------

  findAll(params?: GetAllUsers): Promise<FindAllUsers>;
  findOne(field: keyof Users, value: string): Promise<Users>;
  create(data: CreateUsers): Promise<Users>;
  update(id: string, data: UpdateUsers): Promise<Users>;
  remove(id: string): Promise<RemoveUsers>;

  //#endregion
}
