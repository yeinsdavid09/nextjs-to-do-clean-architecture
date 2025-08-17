"use client";

//* Styles
import style from "./button.module.css";

//* Interfaces
import { ButtonProps } from "./button.interfaces";

export const Button = ({ children, configs, fnOnClick }: ButtonProps) => {
  //#region --------------------------------- Return ---------------------------------

  return (
    <button
      className={`${style.mainContainer} ${
        configs.className ?? configs.className
      }`}
      onClick={fnOnClick}
    >
      {children}
    </button>
  );

  //#endregion
};
