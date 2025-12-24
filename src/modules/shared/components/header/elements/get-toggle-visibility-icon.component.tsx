"use client";

import CloseMenuSvg from "../../../svgs/closeMenu.svg";
import OpenMenuSvg from "../../../svgs/openMenu.svg";

export function getIcon(isModalVisible: boolean) {
    return isModalVisible ? <CloseMenuSvg /> : <OpenMenuSvg />;
}
