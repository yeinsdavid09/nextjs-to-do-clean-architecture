"use client";

//* Styles
import style from "./modal.module.css";

//* States
import { useModalState } from "./modal.state";

//* Components
import { RejectButton, ResolveButton } from "./modal.leaf-client";

export const Modal = () => {
  //#region --------------------------------- Variables ---------------------------------

  const content = useModalState((state) => state.content);
  const options = useModalState((state) => state.options);
  const buttonEnable = useModalState((state) => state.buttonEnable);
  const { confirm, cancel, enableButton } = useModalState();

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return (
    <section className={style.mainContainer}>
      <div className={style.__header}>
        {options?.title && <h3 className={style.__title}>{options?.title}</h3>}
      </div>
      <div className={style.__content}>
        {options?.description && (
          <p className={style.__description}>{options?.description}</p>
        )}
        {content}
      </div>
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
