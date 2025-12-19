"use client";
import { useTranslations } from "next-intl";
import { MyLink } from "../../../types/link";
import { usePathname } from "next/navigation";
import { NavbarItem } from "@heroui/navbar";
import Link from "next/link";

export default function NavLink({ href, tKey }: MyLink) {
    const t = useTranslations("HomeModule.Header");
    const pathname = usePathname();

    console.log(pathname === href);

    return (
        <NavbarItem>
            <Link href={href}>{t(tKey)}</Link>
        </NavbarItem>
    );
}
