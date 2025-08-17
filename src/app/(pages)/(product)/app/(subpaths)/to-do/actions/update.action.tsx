"use server";

import { revalidatePath } from "next/cache";

//* Interfaces
import {
  ToDo,
  UpdateToDos,
} from "@business/product/modules/to-do/base/domain/interfaces/to-do.interfaces";

//* Use Cases
import { updateToDoUseCase } from "@business/product/modules/to-do/base/application/tokens/to-do.tokens";

export const updateToDoAction = async (
  id: string,
  data: UpdateToDos,
  revalidate?: string
) => {
  const response: ToDo = await updateToDoUseCase.execute(id, data);
  if (revalidate) revalidatePath(revalidate);
  return response;
};
