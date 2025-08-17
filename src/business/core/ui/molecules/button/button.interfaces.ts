import type { ReactNode } from "react";

//#region --------------------------------- Types ---------------------------------

export type ButtonActions = "first" | "confirm" | "close" | "clean" | string;

//#endregion

//#region --------------------------------- Models ---------------------------------

export interface ButtonProps {
  children: ReactNode;
  configs: ButtonConfigs;
  fnOnClick?: () => void;
}

export interface ButtonConfigs {
  action: ButtonActions;
  rippleEffect?: boolean;
  className?: string;
  listenToOnLoading?: string;
  tooltip?: {
    text: string;
  };
}

//#endregion
