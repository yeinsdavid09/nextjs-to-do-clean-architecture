"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

//* Styles
import style from "./sidebar-item.module.css";

//* Interfaces
import { SidebarItemProps } from "./sidebar-item.interfaces";

export const SidebarItem = ({ title, icon, path }: SidebarItemProps) => {
  //#region --------------------------------- Variables ---------------------------------

  const pathname = usePathname();
  const isActive = pathname === path;

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return (
    <Link
      className={`${style.mainContainer} ${isActive ?? style.__active}`}
      href={path}
    >
      {icon}
      <p className={style.__label}>{title}</p>
    </Link>
  );
  //#endregion
};
