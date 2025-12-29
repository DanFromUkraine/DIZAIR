"use client";

import { NavbarItem, NavbarMenuItem } from "@heroui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "../header";
import clsx from "clsx";

export function NavLink({ href, tKey, variant }: NavLinkProps) {
  const t = useTranslations("HomeModule.Header");
  const pathname = usePathname();
  const isActive = pathname === href;

  const Component = variant === "menu" ? NavbarMenuItem : NavbarItem;
  const className =
    variant === "menu"
      ? "text-xl text-center my-4 text-gray-secondary  py-3.5 mx-auto font-bold group-data-[active=true]:text-green-accent!"
      : "border-b-2 border-b-transparent group-data-[active=true]:text-green-accent! p-2 group-data-[active=true]:border-b-green-accent";

  return (
    <Component isActive={isActive} className="group">
      <Link href={href} className={clsx("w-full nav-link-base", className)}>
        {t(tKey)}
      </Link>
    </Component>
  );
}
