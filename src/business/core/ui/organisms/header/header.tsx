//* Styles
import style from "./header.module.css";

export const Header = () => {
  //#region --------------------------------- Return ---------------------------------

  return (
    <div className={style.mainContainer}>
      <div className={style.__search}></div>
    </div>
  );

  //#endregion
};
