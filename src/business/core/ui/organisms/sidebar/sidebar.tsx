//* Styles
import style from "./sidebar.module.css";

//* Interfaces
import { SidebarProps } from "./sidebar.interfaces";

//* Components
import { SidebarLogOut } from "./sidebar.leaf-client";
import { SidebarItem } from "../../molecules/sidebar-item/sidebar-item";
import { SidebarProfile } from "../../molecules/sidebar-profile/sidebar-profile";

//* Icons
import { BiLogOut } from "react-icons/bi";

export const Sidebar = ({ items }: SidebarProps) => {
  //#region --------------------------------- Return ---------------------------------

  return (
    <aside className={style.mainContainer}>
      <div className={style.__logo}>Logo</div>
      <div className={style.__profile}>
        <SidebarProfile />
      </div>
      <nav className={style.__navigation}>
        {items.map((item) => (
          <SidebarItem key={item.path} {...item} />
        ))}
      </nav>
      <div className={style.__logOut}>
        <SidebarLogOut className={style.__button}>
          <BiLogOut size={16} />
          <span>Log Out</span>
        </SidebarLogOut>
      </div>
    </aside>
  );

  //#endregion
};
