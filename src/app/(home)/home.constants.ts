import FindYourTypeSvg from "@/src/shared/svgs/find-your-type.svg";
import { BenefitProps, Feature, Step } from "./home";
import GetInsightsSvg from "@/src/shared/svgs/get-insights.svg";
import Feature1Svg from "@/src/shared/svgs/feature1.svg";
import Feature2Svg from "@/src/shared/svgs/feature2.svg";
import Feature3Svg from "@/src/shared/svgs/feature3.svg";
import Feature4Svg from "@/src/shared/svgs/feature4.svg";
import Feature5Svg from "@/src/shared/svgs/feature5.svg";

export const BENEFITS: BenefitProps[] = [
  {
    Icon: FindYourTypeSvg,
    titleKey: "Benefit1.title",
    subtitleKey: "Benefit1.subtitle",
    isTopOne: true,
  },
  {
    Icon: GetInsightsSvg,
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
    Icon: Feature1Svg,
    titleKey: "feature1.title",
    textKey: "feature1.text",
  },
  {
    Icon: Feature2Svg,
    titleKey: "feature2.title",
    textKey: "feature2.text",
  },
  {
    Icon: Feature3Svg,
    titleKey: "feature3.title",
    textKey: "feature3.text",
  },
  {
    Icon: Feature4Svg,
    titleKey: "feature4.title",
    textKey: "feature4.text",
  },
  {
    Icon: Feature5Svg,
    titleKey: "feature5.title",
    textKey: "feature5.text",
  },
];

export const FEATURE_ICON_SIZE = {
  width: 22.4,
  height: 33.6,
};
