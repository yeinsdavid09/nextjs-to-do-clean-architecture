"use server";

import { revalidatePath } from "next/cache";

//* Interfaces
import {
  FindAllToDos,
  GetAllToDos,
} from "@business/product/modules/to-do/base/domain/interfaces/to-do.interfaces";

//* Use Cases
import { findAllToDosUseCase } from "@business/product/modules/to-do/base/application/tokens/to-do.tokens";

export const findAllToDosAction = async (
  params?: GetAllToDos,
  revalidate?: string
) => {
  const response: FindAllToDos = await findAllToDosUseCase.execute(params);
  if (revalidate) revalidatePath(revalidate);
  return response;
};
