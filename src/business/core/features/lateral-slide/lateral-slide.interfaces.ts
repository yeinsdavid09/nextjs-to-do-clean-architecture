import type { ReactNode } from "react";

//* Interfaces
import { ButtonProps } from "../../ui/molecules/button/button.interfaces";

//#region --------------------------------- Models ---------------------------------

export interface LateralSlideProps {
  title: string;
  subtitle?: string;
  buttons: ButtonProps[];
}

//#endregion
