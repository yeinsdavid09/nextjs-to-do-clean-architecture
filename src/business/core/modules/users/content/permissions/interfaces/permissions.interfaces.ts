//* Interfaces
import { Roles } from "@business/core/modules/roles/base/domain/interfaces/roles.interfaces";
import { Users } from "../../../base/domain/interfaces/users.interfaces";

export interface Permissions {
  id: string;
  userId: string;
  roleId: string;
  createdAt: Date;
  updatedAt: Date;
  users?: Users | null;
  roles?: Roles | null;
}
