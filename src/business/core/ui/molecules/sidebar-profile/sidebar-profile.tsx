import { getServerSessionAction } from "@/app/(pages)/(core)/authentication/actions/get-session.action";

//* Styles
import style from "./sidebar-profile.module.css";

//* Components
import { Avatar } from "../../atoms/avatar/avatar";

export const SidebarProfile = async () => {
  //#region --------------------------------- Variables ---------------------------------

  const session = await getServerSessionAction();

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return (
    <div className={style.mainContainer}>
      <Avatar
        className={style.__avatar}
        image={session?.user?.image}
        label={session?.user?.name}
      />
      <div className={style.__texts}>
        <span className={style.__name}>{session?.user?.name}</span>
        <span className={style.__email}>{session?.user?.email}</span>
      </div>
    </div>
  );

  //#endregion
};
