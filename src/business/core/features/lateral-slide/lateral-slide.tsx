"use client";

//* Styles
import style from "./lateral-slide.module.css";

//* States
import { useLateralSlideState } from "./lateral-slide.state";

//* Components
import { RejectButton, ResolveButton } from "./lateral-slide.leaf-client";
import { BsX } from "react-icons/bs";

export const LateralSlide = () => {
  //#region --------------------------------- Variables ---------------------------------

  const content = useLateralSlideState((state) => state.content);
  const options = useLateralSlideState((state) => state.options);
  const buttonEnable = useLateralSlideState((state) => state.buttonEnable);
  const { confirm, cancel, close, enableButton } = useLateralSlideState();

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return (
    <section className={style.mainContainer}>
      <div className={style.__header}>
        {options?.title && <h3 className={style.__title}>{options?.title}</h3>}
        {options?.subtitle && (
          <span className={style.__subtitle}>{options?.subtitle}</span>
        )}
        <BsX className={style.__close} onClick={close} />
      </div>
      <div className={style.__content}>{content}</div>
      <div className={style.__footer}>
        <RejectButton fnOnReject={cancel}>
          <span>Cancelar</span>
        </RejectButton>
        <ResolveButton fnOnResolve={confirm}>
          <span>Confirmar</span>
        </ResolveButton>
      </div>
    </section>
  );

  //#endregion
};
