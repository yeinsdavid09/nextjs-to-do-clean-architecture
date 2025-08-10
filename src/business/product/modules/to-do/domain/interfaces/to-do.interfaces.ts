import { Pagination } from "@/business/core/features/pagination/pagination.interfaces";

export interface ToDo {
  id: string;
  title: string;
  description: string | null;
  status: "IN_PROGRESS" | "DONE" | "CANCELED" | "BACKLOG";
  priority: "LOW" | "MEDIUM" | "HIGH";
  createdAt: Date;
  updatedAt: Date;
}

export interface FindAllToDos {
  total: number;
  data: ToDo[];
}

export interface GetAllToDos extends Pagination {}

export interface CreateToDos {
  title: string;
  description?: string;
  status?: "IN_PROGRESS" | "DONE" | "CANCELED" | "BACKLOG";
  priority?: "LOW" | "MEDIUM" | "HIGH";
  createdAt?: Date;
}

export interface UpdateToDos extends Omit<ToDo, "id"> {}

export interface RemoveToDos {
  id: string;
  message: string;
}
