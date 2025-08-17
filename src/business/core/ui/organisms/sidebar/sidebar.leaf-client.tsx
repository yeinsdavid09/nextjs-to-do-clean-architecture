"use client";

import { useCallback, useEffect, useMemo, type ReactNode } from "react";
import { signOut } from "next-auth/react";

//* States
import { useModalState } from "@business/core/features/modal/modal.state";

//* Components
import { Button } from "../../molecules/button/button";

//#region --------------------------------- SidebarLogOut ---------------------------------

interface SidebarLogOutProps {
  className?: string;
  children?: ReactNode;
}

export const SidebarLogOut = ({ className, children }: SidebarLogOutProps) => {
  //#region --------------------------------- Variables ---------------------------------

  const { action, open, close } = useModalState();
  const actionsDictionary = useMemo<Record<string, () => void>>(
    () => ({
      cancel: () => close(),
      confirm: () => signOut(),
    }),
    [close]
  );

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  const fnOnSignOut = () => {
    open({ title: "Are you sure you want to sign out?" }, <></>);
  };

  const listenToAction = useCallback(
    (action: string) => {
      if (action in actionsDictionary) actionsDictionary[action]();
    },
    [actionsDictionary]
  );

  //#endregion

  //#region --------------------------------- Hooks ---------------------------------

  useEffect(() => {
    if (!action) return;
    listenToAction(action);
  }, [action, listenToAction]);

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return (
    <Button configs={{ action: "logOut", className }} fnOnClick={fnOnSignOut}>
      {children}
    </Button>
  );

  //#endregion
};

//#endregion
