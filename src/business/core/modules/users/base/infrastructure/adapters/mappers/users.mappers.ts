//* Interfaces
import {
  CreateUsers,
  Users,
  UpdateUsers,
} from "../../../domain/interfaces/users.interfaces";

export class ToDoMapper {
  //#region --------------------------------- Models ---------------------------------

  static toModel(response: Users): Users {
    return {
      id: response.id,
      name: response.name,
      email: response.email,
      emailVerified: response.emailVerified,
      password: response.password,
      image: response.image,
      accounts: response.accounts,
      sessions: response.sessions,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    };
  }

  static toCreateModel(response: CreateUsers): CreateUsers {
    return {
      name: response.name,
      email: response.email,
      password: response.password,
      image: response.image,
    };
  }

  static toUpdateModel(response: UpdateUsers): UpdateUsers {
    return {
      name: response.name,
      password: response.password,
      image: response.image,
    };
  }

  //#endregion
}
