import { create } from "zustand";

interface MenuVisibility {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  setIsMenuOpen: (arg1: boolean) => void;
}

export const useMenuVisibility = create<MenuVisibility>((set) => ({
  isMenuOpen: false,
  closeMenu: () => set({ isMenuOpen: false }),
  openMenu: () => set({ isMenuOpen: true }),
  setIsMenuOpen: (newVal) => set({ isMenuOpen: newVal }),
}));
