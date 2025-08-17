"use server";

import { revalidatePath } from "next/cache";

//* Interfaces
import { CreateToDos } from "@business/product/modules/to-do/base/domain/interfaces/to-do.interfaces";

//* Use Cases
import { createToDoUseCase } from "@business/product/modules/to-do/base/application/tokens/to-do.tokens";

export const createToDoAction = async (
  data: CreateToDos,
  revalidate?: string
) => {
  const response = await createToDoUseCase.execute(data);
  if (revalidate) revalidatePath(revalidate);
  return response;
};
