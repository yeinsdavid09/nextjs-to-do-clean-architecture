//* Interfaces
import { Pagination } from "@business/core/features/pagination/pagination.interfaces";
import { Account } from "./account.interfaces";
import { Session } from "./session.interfaces";
import { Permissions } from "../../../content/permissions/interfaces/permissions.interfaces";
import { UserNotifications } from "../../../content/user-notifications/interfaces/user-notifications.interfaces";

//#region --------------------------------- Types ---------------------------------

export type UserStatus = "ACTIVE" | "INACTIVE";

//#endregion

//#region --------------------------------- Models ---------------------------------

export interface Users {
  id: string;
  name?: string | null;
  email: string;
  emailVerified?: Date | null;
  image?: string | null;
  password?: string | null;
  status: UserStatus;
  accounts?: Account[] | null;
  sessions?: Session[] | null;
  permissions?: Permissions[] | null;
  notifications?: UserNotifications[] | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface FindAllUsers {
  total: number;
  data: Users[];
}

export interface GetAllUsers extends Pagination {}

export interface CreateUsers {
  name?: string;
  email: string;
  password: string;
  image?: string;
}

export interface UpdateUsers {
  name?: string;
  image?: string;
  password?: string;
}

export interface RemoveUsers {
  id: string;
  message: string;
}

//#endregion
