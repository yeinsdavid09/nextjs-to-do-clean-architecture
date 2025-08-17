//* Interfaces
import {
  CreateRoles,
  Roles,
  UpdateRoles,
} from "../../../domain/interfaces/roles.interfaces";

export class RolesMapper {
  //#region --------------------------------- Models ---------------------------------

  static toModel(response: Roles): Roles {
    return {
      id: response.id,
      name: response.name,
      permission: response.permission,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    };
  }

  static toCreateModel(response: CreateRoles): CreateRoles {
    return {
      name: response.name,
    };
  }

  static toUpdateModel(response: UpdateRoles): UpdateRoles {
    return {
      name: response.name,
    };
  }

  //#endregion
}
