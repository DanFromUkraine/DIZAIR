import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import LogoSvg from "../../svgs/logo.svg";
import NavLink from "./elements/nav-link.component";
import { MAIN_LOCAL_LINKS } from "./header.constants";
import SignInBtn from "./elements/signin-btn.component";
import StartPersonalityTest from "./elements/start-test.component";
import LanguageSelector from "./elements/language-selector";

export default function Header() {
    return (
        <Navbar position="static">
            <NavbarBrand>
                <LogoSvg />
            </NavbarBrand>
            <NavbarContent>
                {MAIN_LOCAL_LINKS.map((link) => (
                    <NavLink key={link.tKey} {...link} />
                ))}
                <SignInBtn />
                <StartPersonalityTest />
                <LanguageSelector />
            </NavbarContent>
        </Navbar>
    );
}
