import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "To DO's - What To Do App",
  description: "A To Do App built with clean architecture",
};

export default function ToDoLayout({ children }: { children: ReactNode }) {
  //#region --------------------------------- Return ---------------------------------

  return children;

  //#endregion
}
