"use server";

import { revalidatePath } from "next/cache";

//* Interfaces
import { RemoveToDos } from "@business/product/modules/to-do/base/domain/interfaces/to-do.interfaces";

//* Use Cases
import { removeToDoUseCase } from "@business/product/modules/to-do/base/application/tokens/to-do.tokens";

export const removeToDoAction = async (id: string, revalidate?: string) => {
  const response: RemoveToDos = await removeToDoUseCase.execute(id);
  if (revalidate) revalidatePath(revalidate);
  return response;
};
