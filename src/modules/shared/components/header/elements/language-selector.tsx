"use client";

import { Button } from "@heroui/button";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@heroui/dropdown";
import LanguagePickerSvg from "../../../svgs/languagePicker";
import { LANGUAGE_OPTIONS } from "../header.constants";

export default function LanguageSelector() {
    const currSelectedLanguage = "en";
    const selectedKeys = new Set([currSelectedLanguage]);

    return (
        <Dropdown
            shouldBlockScroll={false}
            placement="bottom-end"
            aria-label="select language"
        >
            <DropdownTrigger>
                <Button variant="light" className="language-dropdown-trigger">
                    <LanguagePickerSvg />

                    <p>en</p>
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                variant="flat"
                className="select-language-dropdown-menu"
                selectionMode="single"
                selectedKeys={selectedKeys}
                hideSelectedIcon
            >
                {LANGUAGE_OPTIONS.map(({ label, id_i18n }) => (
                    <DropdownItem key={id_i18n}>{label}</DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}
