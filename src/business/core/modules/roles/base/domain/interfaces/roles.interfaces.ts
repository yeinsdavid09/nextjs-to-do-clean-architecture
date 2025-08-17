//* Interfaces
import { Permissions } from "@business/core/modules/users/content/permissions/interfaces/permissions.interfaces";
import { Pagination } from "@business/core/features/pagination/pagination.interfaces";

export interface Roles {
  id: string;
  name: string;
  permission?: Permissions[];
  createdAt: Date;
  updatedAt: Date;
}

export interface FindAllRoles {
  total: number;
  data: Roles[];
}

export interface GetAllRoles extends Pagination {}

export interface CreateRoles {
  name: string;
}

export interface UpdateRoles {
  name?: string;
}

export interface RemoveRoles {
  id: string;
  message: string;
}
