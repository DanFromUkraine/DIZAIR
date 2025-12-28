import { getTranslations } from "next-intl/server";
import messages from "@/src/i18n/locales/en.json";
import { NamespacedMessageKeys } from "next-intl";

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof messages;
  }
}

export type Translator = Awaited<ReturnType<typeof getTranslations>>;

export type TranslatorKey = NamespacedMessageKeys<typeof messages>;
