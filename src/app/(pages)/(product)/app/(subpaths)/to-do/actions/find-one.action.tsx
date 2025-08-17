"use server";

import { revalidatePath } from "next/cache";

//* Interfaces
import { ToDo } from "@business/product/modules/to-do/base/domain/interfaces/to-do.interfaces";

//* Use Cases
import { findOneToDoUseCase } from "@business/product/modules/to-do/base/application/tokens/to-do.tokens";

export const findOneToDoAction = async (
  field: keyof ToDo,
  value: string,
  revalidate?: string
) => {
  const response: ToDo = await findOneToDoUseCase.execute(field, value);
  if (revalidate) revalidatePath(revalidate);
  return response;
};
