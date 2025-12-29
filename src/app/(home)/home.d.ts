import { TranslatorKey } from "@/src/shared/types/i18n-global";

export interface BenefitProps {
  imgSrc: string;
  titleKey: TranslatorKey;
  subtitleKey: TranslatorKey;
  isTopOne: boolean;
}

export interface Step {
  titleKey: TranslatorKey;
  textKey: TranslatorKey;
}

export interface Feature {
  iconSrc: string;
  titleKey: TranslatorKey;
  textKey: TranslatorKey;
}
