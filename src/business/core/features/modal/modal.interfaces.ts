import type { ReactNode } from "react";

//* Interfaces
import { ButtonProps } from "../../ui/molecules/button/button.interfaces";

//#region --------------------------------- Models ---------------------------------

export interface ModalProps {
  title: string;
  description?: string;
  buttons?: ButtonProps[];
}

//#endregion
