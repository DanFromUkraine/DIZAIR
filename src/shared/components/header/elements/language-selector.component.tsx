"use client";

import {
  Button,
  ButtonProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@heroui/react";
import { clsx } from "clsx";

import { LANGUAGE_OPTIONS } from "@/src/shared/components/header/header.constants";
import { useState } from "react";
import LogoSvg from "@/src/shared/svgs/logo.svg";
import CloseMenuSvg from "@/src/shared/svgs/closeMenu.svg";
import { useMenuVisibility } from "@/src/shared/components/header/header.store";
import LanguagePickerSvg from "@/src/shared/svgs/languagePicker";

export default function LanguageSelector() {
  const currSelectedLanguage = "en";

  return (
    <>
      <DesktopLanguageDropdown currLanguage={currSelectedLanguage} />
      <MobileLanguageModal currLanguage={currSelectedLanguage} />
    </>
  );
}

type LanguageSelectorUiItemProps = Readonly<{
  currLanguage: string;
}>;

function TriggerButton({
  className,
  currLanguage,
  ...props
}: ButtonProps & LanguageSelectorUiItemProps) {
  return (
    <NavbarItem>
      <Button
        variant="light"
        disableAnimation
        {...props}
        className={clsx(
          "p-3 small-phone-screen:ml-4 w-fit min-w-0! gap-1",
          className,
        )}
      >
        <LanguagePickerSvg />

        <span className="uppercase text-sm leading-4 font-bold  text-center text-gray-secondary">
          {currLanguage}
        </span>
      </Button>
    </NavbarItem>
  );
}

function DesktopLanguageDropdown({
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
        <TriggerButton {...{ currLanguage, className: "max-xl:hidden" }} />
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        classNames={{
          base: "h-dropdown-height overflow-y-auto",
          list: "gap-0",
        }}
        selectionMode="single"
        selectedKeys={selectedKeys}
        hideSelectedIcon
      >
        {LANGUAGE_OPTIONS.map(({ label, id_i18n }) => (
          <DropdownItem
            key={id_i18n}
            classNames={{
              title: "font-semibold",
              base: "px-6 py-3 text-gray-secondary! font-semibold data-[selected=true]:bg-gray-light data-[pressed=true]:bg-gray-100  data-[focus=true]:bg-gray-light!",
            }}
          >
            {label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

function MobileLanguageModal({ currLanguage }: LanguageSelectorUiItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { closeMenu: closeNavMenu } = useMenuVisibility();

  const closeLangModal = () => {
    setIsModalOpen(false);
    closeNavMenu();
  };

  const openLangModal = () => setIsModalOpen(true);

  return (
    <>
      <TriggerButton
        {...{ currLanguage, className: "xl:hidden", onPress: openLangModal }}
      />
      <Modal
        scrollBehavior="inside"
        isOpen={isModalOpen}
        size="full"
        disableAnimation
        onClose={closeLangModal}
        classNames={{
          body: "pb-4 gap-2",
          closeButton: "hidden",
          header:
            "header-like max-md:mx-8 max-phone-screen:mx-0! globalPaddings flex justify-between items-center",
        }}
      >
        <ModalContent>
          <ModalHeader>
            <LogoSvg
              onClick={closeLangModal}
              className="text-medium font-normal "
            />
            <CloseMenuSvg
              onClick={closeLangModal}
              className="toggle-menu-visibility "
            />
          </ModalHeader>

          <ModalBody>
            {LANGUAGE_OPTIONS.map(({ label, id_i18n }) => (
              <Button
                onPress={closeLangModal}
                key={id_i18n}
                variant="light"
                data-selected={id_i18n === currLanguage}
                disableAnimation
                className="text-gray-secondary shrink-0! justify-start font-semibold hover:bg-gray-light! data-[selected=true]:bg-gray-light"
              >
                {label}
              </Button>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
