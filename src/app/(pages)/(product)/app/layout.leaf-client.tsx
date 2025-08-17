"use client";

//* Styles
import style from "./layout.module.css";

//* States
import { LateralSlide } from "@business/core/features/lateral-slide/lateral-slide";
import { Modal } from "@business/core/features/modal/modal";

//* Components
import { useLateralSlideState } from "@business/core/features/lateral-slide/lateral-slide.state";
import { useModalState } from "@business/core/features/modal/modal.state";

//#region --------------------------------- Lateral Slide ---------------------------------

export const LayoutLateralSlide = () => {
  //#region --------------------------------- Return ---------------------------------

  const onDeployed = useLateralSlideState((state) => state.onDeployed);
  const { close } = useLateralSlideState();

  //#endregion

  //#region --------------------------------- Methods ---------------------------------
  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return (
    <div
      className={`${style.__lateralSlide}  ${onDeployed && style.__deployed}`}
    >
      <div className={style.__container}>
        <LateralSlide />
      </div>
      {onDeployed && (
        <div className={style.__backgroundLayer} onClick={close}></div>
      )}
    </div>
  );

  //#endregion
};

//#endregion

//#region --------------------------------- Modal ---------------------------------

export const LayoutModal = () => {
  //#region --------------------------------- Return ---------------------------------

  const onDeployed = useModalState((state) => state.onDeployed);
  const { close } = useModalState();

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return (
    <div className={`${style.__modal}  ${onDeployed && style.__deployed}`}>
      <div className={style.__container}>
        <Modal />
      </div>
      {onDeployed && (
        <div className={style.__backgroundLayer} onClick={close}></div>
      )}
    </div>
  );

  //#endregion
};

//#endregion
