"use client";

//* Styles
import style from "./card.module.css";

//* Interfaces
import { CardProps } from "./card.interfaces";

export const Card = ({ children, onClick }: CardProps) => {
  //#region --------------------------------- Return ---------------------------------

  return (
    <div
      className={`${style.mainContainer} ${onClick ?? style.__clickable}`}
      onClick={onClick}
    >
      {children}
    </div>
  );

  //#endregion
};
