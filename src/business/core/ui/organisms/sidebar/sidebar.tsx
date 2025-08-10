import Image from "next/image";

//* Styles
import style from "./sidebar.module.css";

//* Interfaces
import { SidebarProps } from "./sidebar.interfaces";

//* Components
import { SidebarItem } from "../../molecules/sidebar-item/sidebar-item";

export const Sidebar = ({ items }: SidebarProps) => {
  //#region --------------------------------- Return ---------------------------------

  return (
    <aside className={style.mainContainer}>
      <div className={style.__logo}>Logo</div>
      <div className={style.__profile}>
        <div className={style.__avatar}>Avatar</div>
        <div className={style.__texts}>
          <span className={style.__name}>Yeins David Llano</span>
          <span className={style.__email}>yeinsdavid@gmail.com</span>
        </div>
      </div>
      <nav className={style.__navigation}>
        {items.map((item) => (
          <SidebarItem key={item.path} {...item} />
        ))}
      </nav>
    </aside>
  );

  //#endregion
};
