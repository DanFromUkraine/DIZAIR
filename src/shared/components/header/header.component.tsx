"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/react";
import LanguageSelector from "./elements/language-selector.component";
import SignInBtn from "./elements/signin-btn.component";
import StartPersonalityTest from "./elements/start-test.component";
import { MAIN_LOCAL_LINKS } from "./header.constants";
import { useMenuVisibility } from "./header.store";
import Link from "next/link";
import LogoSvg from "../../svgs/logo.svg";
import { ToggleModalVisibilityIcon } from "./elements/get-toggle-visibility-icon.component";
import { NavLink } from "./elements/nav-link.component";

export default function Header() {
  const { isMenuOpen, setIsMenuOpen } = useMenuVisibility();

  return (
    <Navbar
      position="static"
      classNames={{
        wrapper: "header-like",
        content: "gap-0",
        menu: "items-center",
      }}
      disableAnimation
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link href="/">
          <LogoSvg />
        </Link>
      </NavbarBrand>
      <DesktopContent />
      <MobileContent />
      <MobileMenu />
    </Navbar>
  );
}

function MobileContent() {
  return (
    <NavbarContent className="xl:hidden" justify="end">
      <LanguageSelector />
      <NavbarMenuToggle
        className="toggle-menu-visibility"
        aria-label="toggle menu visibility"
        icon={<ToggleModalVisibilityIcon />}
      />
    </NavbarContent>
  );
}

function DesktopContent() {
  return (
    <NavbarContent className="max-xl:hidden">
      {MAIN_LOCAL_LINKS.map((link) => (
        <NavLink variant="content" key={link.tKey} {...link} />
      ))}
      <SignInBtn />
      <StartPersonalityTest />
      <LanguageSelector />
    </NavbarContent>
  );
}

function MobileMenu() {
  return (
    <NavbarMenu className="mt-5">
      {MAIN_LOCAL_LINKS.map((link) => (
        <NavLink variant="menu" key={link.tKey} {...link} />
      ))}
      <SignInBtn className="w-full h-auto  flex text-pre-xl/relaxed! mx-4 big-btn-spacing" />
    </NavbarMenu>
  );
}
