import { MyLink } from "@/src/shared/types/link";

export interface LanguageOption {
  label: string;
  id_i18n: string;
}

export interface NavLinkProps extends MyLink {
  variant: "menu" | "content";
}
