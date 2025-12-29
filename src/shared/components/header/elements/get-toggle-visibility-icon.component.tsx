"use client";

import CloseMenuSvg from "@/src/shared/svgs/closeMenu.svg";
import OpenMenuSvg from "@/src/shared/svgs/openMenu.svg";
import { useMenuVisibility } from "@/src/shared/components/header/header.store";

export function ToggleModalVisibilityIcon() {
  const { isMenuOpen } = useMenuVisibility();

  return isMenuOpen ? <CloseMenuSvg /> : <OpenMenuSvg />;
}
