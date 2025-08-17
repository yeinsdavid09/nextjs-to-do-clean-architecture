"use client";

//* Styles
import style from "./tag.module.css";

//* Interfaces
import { TagProps } from "./tag.interfaces";

//* Icons
import { BsX } from "react-icons/bs";

export const Tag = ({
  label,
  icon,
  className,
  fnOnClick,
  fnOnClose,
}: TagProps) => {
  //#region --------------------------------- Return ---------------------------------

  return (
    <div
      className={`${style.mainContainer} ${className && className}`}
      onClick={fnOnClick}
    >
      {icon}
      <span className={style.__label}>{label}</span>
      {fnOnClose && <BsX className={style.__close} onClick={fnOnClose} />}
    </div>
  );

  //#endregion
};
