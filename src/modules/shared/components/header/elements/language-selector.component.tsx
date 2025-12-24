"use client";

import {
    Button,
    ButtonProps,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
} from "@heroui/react";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@heroui/react";
import { clsx } from "clsx";

import LanguagePickerSvg from "../../../svgs/languagePicker";
import { LANGUAGE_OPTIONS } from "../header.constants";
import { useState } from "react";

export default function LanguageSelector() {
    const currSelectedLanguage = "en";

    return (
        <>
            <LanguageSelectorDropdown__DesktopOnly
                currLanguage={currSelectedLanguage}
            />
            <LanguageSelectorModal__MobileOnly
                currLanguage={currSelectedLanguage}
            />
        </>
    );
}

type LanguageSelectorUiItemProps = Readonly<{
    currLanguage: string;
}>;

function TriggerButton({ className, ...props }: ButtonProps) {
    return (
        <Button
            variant="light"
            disableAnimation
            {...props}
            className={clsx("language-trigger", className)}
        >
            <LanguagePickerSvg />

            <p>EN</p>
        </Button>
    );
}

function LanguageSelectorDropdown__DesktopOnly({
    currLanguage,
}: LanguageSelectorUiItemProps) {
    const selectedKeys = new Set([currLanguage]);
    return (
        <Dropdown
            shouldBlockScroll={false}
            placement="bottom-end"
            aria-label="select language"
            disableAnimation
        >
            <DropdownTrigger>
                <TriggerButton className="max-xl:hidden" />
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

function LanguageSelectorModal__MobileOnly({
    currLanguage,
}: LanguageSelectorUiItemProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <TriggerButton className="xl:hidden" onPress={openModal} />
            <Modal
                isOpen={isModalOpen}
                className="language-modal-container"
                size="full"
                disableAnimation
            >
                <ModalContent>
                    <ModalHeader onClick={closeModal}>Hello</ModalHeader>
                    <ModalBody>
                        {LANGUAGE_OPTIONS.map(({ label, id_i18n }) => (
                            <Button onPress={closeModal} key={id_i18n}>
                                {label}
                            </Button>
                        ))}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
