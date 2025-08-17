import type { ReactNode } from "react";
import { create } from "zustand";

//* Interfaces
import { ModalProps } from "./modal.interfaces";
import { ButtonActions } from "../../ui/molecules/button/button.interfaces";

// --------------------------------- Type ---------------------------------

type ModalState = {
  onDeployed: boolean;
  options: ModalProps | null;
  content: ReactNode | null;
  action: ButtonActions;
  buttonEnable: boolean;
  open: (options: ModalProps, content: ReactNode) => void;
  enableButton: (state: boolean) => void;
  manageAction: (action: ButtonActions) => void;
  toggle: () => void;
  confirm: () => void;
  cancel: () => void;
  close: () => void;
  clean: () => void;
};

//#endregion

export const useModalState = create<ModalState>((set, get) => ({
  // --------------------------------- Variables ---------------------------------

  onDeployed: false,
  options: null,
  content: null,
  action: "first",
  buttonEnable: false,

  //#endregion

  // --------------------------------- Variables ---------------------------------

  open: (options, content) => {
    set({
      content: content ?? null,
      options: options ?? null,
      action: "",
      onDeployed: true,
    });
  },

  enableButton: (enable) => set({ buttonEnable: enable }),

  manageAction: (action) => {
    if (action === "confirm") get().confirm();
    else if (action === "cancel") get().cancel();
    else set({ action: action });
  },

  toggle: () => set((state) => ({ onDeployed: !state.onDeployed })),
  confirm: () => set({ action: "confirm" }),
  cancel: () => set({ action: "cancel" }),
  close: () => {
    set({ action: "close", onDeployed: false });
    setTimeout(() => get().clean(), 300);
  },

  clean: () => {
    set({
      action: "clean",
      buttonEnable: false,
      content: null,
      options: null,
    });
  },

  //#endregion
}));
