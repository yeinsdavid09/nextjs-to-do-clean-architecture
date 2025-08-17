//* Interfaces
import { Users } from "@/business/core/modules/users/base/domain/interfaces/users.interfaces";

export interface Session {
  user: Users;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface SignUp {
  name: string;
  email: string;
  password: string;
}

export interface LogOut {}
