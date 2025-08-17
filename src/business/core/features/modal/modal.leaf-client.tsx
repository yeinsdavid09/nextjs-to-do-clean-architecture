"use client";

import type { ReactNode } from "react";

//* Components
import { Button } from "@business/core/ui/molecules/button/button";

//#region --------------------------------- ResolveButton ---------------------------------

//* Interfaces
interface ResolveButtonProps {
  children: ReactNode;
  className?: string;
  fnOnResolve: () => void;
}

export const ResolveButton = ({
  className,
  children,
  fnOnResolve,
}: ResolveButtonProps) => {
  //#region --------------------------------- Return ---------------------------------

  return (
    <Button
      configs={{ action: "confirm", className: className }}
      fnOnClick={fnOnResolve}
    >
      {children}
    </Button>
  );

  //#endregion
};

//#endregion

//#region --------------------------------- Reject Button ---------------------------------

//* Interfaces
interface RejectButtonProps {
  children: ReactNode;
  className?: string;
  fnOnReject: () => void;
}

export const RejectButton = ({
  children,
  className,
  fnOnReject,
}: RejectButtonProps) => {
  //#region --------------------------------- Return ---------------------------------

  return (
    <Button
      configs={{ action: "cancel", className: className }}
      fnOnClick={fnOnReject}
    >
      {children}
    </Button>
  );

  //#endregion
};

//#endregion
