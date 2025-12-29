import { BenefitProps, Step } from "./home";

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