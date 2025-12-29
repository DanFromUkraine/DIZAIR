import { TranslatorKey } from "@/src/shared/types/i18n-global";
import { ReactNode } from "react";

export interface BenefitProps {
  Icon: (props: unknown) => ReactNode;
  titleKey: TranslatorKey;
  subtitleKey: TranslatorKey;
  isTopOne: boolean;
}

export interface Step {
  titleKey: TranslatorKey;
  textKey: TranslatorKey;
}

export interface Feature {
  Icon: (props: unknown) => ReactNode;
  titleKey: TranslatorKey;
  textKey: TranslatorKey;
}
