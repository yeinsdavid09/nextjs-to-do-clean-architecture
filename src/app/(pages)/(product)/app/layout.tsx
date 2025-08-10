import type { Metadata } from "next";
import type { ReactNode } from "react";

//* Styles
import style from "./layout.module.css";

//* Components
import { Sidebar } from "@/business/core/ui/organisms/sidebar/sidebar";
import { Header } from "@/business/core/ui/organisms/header/header";

//* Icons
import { BsGridFill, BsListCheck } from "react-icons/bs";

export const metadata: Metadata = {
  title: "What To Do App - Your Favorite To Do App",
  description: "A To Do App built with clean architecture",
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.mainContainer}>
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
  );
}
