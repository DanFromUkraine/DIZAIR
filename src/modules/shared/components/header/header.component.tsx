import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@heroui/navbar";
import LogoSvg from "../../svgs/logo.svg";
import { NavContentLink, NavMenuLink } from "./elements/nav-link.component";
import { MAIN_LOCAL_LINKS } from "./header.constants";
import SignInBtn from "./elements/signin-btn.component";
import StartPersonalityTest from "./elements/start-test.component";
import LanguageSelector from "./elements/language-selector.component";
import { getIcon } from "./elements/get-toggle-visibility-icon.component";

export default function Header() {
    return (
        <Navbar position="static" classNames={{ wrapper: "h-auto max-w-none" }}>
            <NavbarBrand>
                <LogoSvg />
            </NavbarBrand>
            <NavbarContent className="max-xl:hidden">
                {MAIN_LOCAL_LINKS.map((link) => (
                    <NavContentLink key={link.tKey} {...link} />
                ))}
                <SignInBtn />
                <StartPersonalityTest />
                <LanguageSelector />
            </NavbarContent>
            <NavbarContent className="xl:hidden" justify="end">
                <LanguageSelector />
                <NavbarMenuToggle className="navMenuToggle" icon={getIcon} />
            </NavbarContent>
            <NavbarMenu className="NavbarMenu">
                {MAIN_LOCAL_LINKS.map((link) => (
                    <NavMenuLink key={link.tKey} {...link} />
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
