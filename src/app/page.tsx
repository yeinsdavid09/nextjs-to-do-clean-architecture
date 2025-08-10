import { redirect } from "next/navigation";

export default function RootPage() {
  //#region --------------------------------- Return ---------------------------------

  redirect("app/dashboard");

  //#endregion
}
