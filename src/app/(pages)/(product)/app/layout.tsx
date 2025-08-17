import type { Metadata } from "next";
import type { ReactNode } from "react";
import { redirect } from "next/navigation";

//* Styles
import style from "./layout.module.css";

//* Actions
import { getServerSessionAction } from "../../(core)/authentication/actions/get-session.action";

//* Components
import { LayoutLateralSlide, LayoutModal } from "./layout.leaf-client";
import { Sidebar } from "@business/core/ui/organisms/sidebar/sidebar";
import { Header } from "@business/core/ui/organisms/header/header";

//* Icons
import { BsGridFill, BsListCheck } from "react-icons/bs";

export const metadata: Metadata = {
  title: "What To Do App - Your Favorite To Do App",
  description: "A To Do App built with clean architecture",
};

export default async function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  //#region --------------------------------- Variables ---------------------------------

  const session = await getServerSessionAction();

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  if (!session) redirect("/api/auth/signin");

  return (
    <div className={style.mainContainer}>
      <div className={style.__layout}>
        <div className={style.__sidebar}>
          <Sidebar
            items={[
              {
                title: "Dashboard",
                path: "/app/dashboard",
                icon: <BsGridFill size={16} />,
              },
              {
                title: "To Do's",
                path: "/app/to-do",
                icon: <BsListCheck size={16} />,
              },
            ]}
          />
        </div>
        <div className={style.__wrapper}>
          <div className={style.__header}>
            <Header />
          </div>
          <main className={style.__main}>{children}</main>
        </div>
      </div>
      <LayoutLateralSlide />
      <LayoutModal />
    </div>
  );

  //#endregion
}
