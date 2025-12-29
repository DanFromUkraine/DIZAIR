import { BenefitProps, Feature, Step } from "./home";

export const BENEFITS: BenefitProps[] = [
  {
    imgSrc: "/find-your-type.svg",
    titleKey: "Benefit1.title",
    subtitleKey: "Benefit1.subtitle",
    isTopOne: true,
  },
  {
    imgSrc: "/get-insights.svg",
    titleKey: "Benefit2.title",
    subtitleKey: "Benefit2.subtitle",
    isTopOne: false,
  },
];

export const STEPS: Step[] = [
  {
    titleKey: "HowItWorks.step1.title",
    textKey: "HowItWorks.step1.text",
  },
  {
    titleKey: "HowItWorks.step2.title",
    textKey: "HowItWorks.step2.text",
  },
  {
    titleKey: "HowItWorks.step3.title",
    textKey: "HowItWorks.step3.text",
  },
];

export const FEATURES: Feature[] = [
  {
    iconSrc: "/icons/feature1.svg",
    titleKey: "feature1.title",
    textKey: "feature1.text",
  },
  {
    iconSrc: "/icons/feature2.svg",
    titleKey: "feature2.title",
    textKey: "feature2.text",
  },
  {
    iconSrc: "/icons/feature3.svg",
    titleKey: "feature3.title",
    textKey: "feature3.text",
  },
  {
    iconSrc: "/icons/feature4.svg",
    titleKey: "feature4.title",
    textKey: "feature4.text",
  },
  {
    iconSrc: "/icons/feature5.svg",
    titleKey: "feature5.title",
    textKey: "feature5.text",
  },
];

export const FEATURE_ICON_SIZE = {
  width: 22.4,
  height: 33.6,
};
