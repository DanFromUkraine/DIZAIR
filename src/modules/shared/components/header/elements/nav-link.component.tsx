"use client";
import { useTranslations } from "next-intl";
import { MyLink } from "../../../types/link";
import { usePathname } from "next/navigation";
import { NavbarItem, NavbarMenuItem } from "@heroui/react";
import Link from "next/link";

export function NavContentLink({ href, tKey }: MyLink) {
    const t = useTranslations("HomeModule.Header");
    const pathname = usePathname();

    return (
        <Link href={href}>
            <NavbarItem isActive={pathname === href} className="HeaderNavBtn">
                {t(tKey)}
            </NavbarItem>
        </Link>
    );
}

export function NavMenuLink({ href, tKey }: MyLink) {
    const t = useTranslations("HomeModule.Header");
    const pathname = usePathname();

    return (
        <Link href={href}>
            <NavbarMenuItem
                isActive={pathname === href}
                className="HeaderNavMenuBtn"
            >
                {t(tKey)}
            </NavbarMenuItem>
        </Link>
    );
}
