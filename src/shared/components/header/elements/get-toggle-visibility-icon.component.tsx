"use client";

import CloseMenuSvg from "../../../svgs/closeMenu.svg";
import OpenMenuSvg from "../../../svgs/openMenu.svg";
import { useMenuVisibility } from "../header.store";

export function ToggleModalVisibilityIcon() {
  const { isMenuOpen } = useMenuVisibility();

  return isMenuOpen ? <CloseMenuSvg /> : <OpenMenuSvg />;
}
