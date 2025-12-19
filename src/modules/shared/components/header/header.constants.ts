import { MyLink } from "../../types/link";
import { LanguageOption } from "./header";

export const MAIN_LOCAL_LINKS: MyLink[] = [
    {
        tKey: "home",
        href: "/",
    },
    {
        tKey: "about",
        href: "/about",
    },
    {
        tKey: "pricing",
        href: "/pricing",
    },
    {
        tKey: "faqs",
        href: "/faqs",
    },
    {
        tKey: "contact-us",
        href: "/contact-us",
    },
];

export const LANGUAGE_OPTIONS: LanguageOption[] = [
    { label: "Dansk", id_i18n: "da" },
    { label: "Deutsch", id_i18n: "de" },
    { label: "Eesti", id_i18n: "et" },
    { label: "English", id_i18n: "en" },
    { label: "Español", id_i18n: "es" },
    { label: "Français", id_i18n: "fr" },
    { label: "Indonesia", id_i18n: "id" },
    { label: "Italiano", id_i18n: "it" },
    { label: "Latviešu", id_i18n: "lv" },
    { label: "Lietuvių", id_i18n: "lt" },
    { label: "Melayu", id_i18n: "ms" },
    { label: "Nederlands", id_i18n: "nl" },
    { label: "Norsk", id_i18n: "no" },
    { label: "Polski", id_i18n: "pl" },
    { label: "Português", id_i18n: "pt" },
];
