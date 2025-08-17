//* Interfaces
import { Users } from "./users.interfaces";

export interface Session {
  sessionToken: string;
  userId: string;
  expires: Date;
  createdAt: Date;
  updatedAt: Date;
  user?: Users;
}
