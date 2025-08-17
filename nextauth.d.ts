// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";

//* Interfaces
import { Permissions } from "@business/core/modules/users/content/permissions/interfaces/permissions.interfaces";

interface IUser extends DefaultUser {
  id: string;
  permissions?: Permissions[];
  status?: string;
}

declare module "next-auth" {
  interface User extends IUser {}

  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
