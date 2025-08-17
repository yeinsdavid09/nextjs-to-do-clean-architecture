"use client";

import Image from "next/image";
import { useMemo } from "react";

//* Styles
import style from "./avatar.module.css";

//* Interfaces
import { AvatarProps } from "./avatar.interfaces";

export const Avatar = ({ label, image, icon, className }: AvatarProps) => {
  //#region --------------------------------- Variables ---------------------------------

  const initials = useMemo(() => {
    if (!label) return "";
    const parts = label.split(" ").filter(Boolean);
    const length: Record<number, string> = {
      1: parts[0]?.[0],
      2: `${parts[0]?.[0]}${parts?.[1]?.[0]}`,
      3: `${parts[0]?.[0]}${parts?.[1]?.[0]}${parts?.[2]?.[0]}`,
    };
    return length[parts.length] || "";
  }, [label]);

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return (
    <div
      className={`${style.mainContainer} ${className && className}  bg-red-400`}
    >
      {image && image.toLowerCase().startsWith("http") && (
        <Image src={image} alt={label ?? ""} width={100} height={100} />
      )}
      {icon && icon}
      {initials && (
        <span className={style.__span}>
          <strong>{initials.toUpperCase()}</strong>
        </span>
      )}
    </div>
  );

  //#endregion
};
