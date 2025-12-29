"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Disclaimer() {
  const t = useTranslations("footer");
  const [disclaimerVisible, setDisclaimerVisible] = useState(false);

  const disclaimerText = disclaimerVisible
    ? t("disclaimer-whole")
    : t("disclaimer-part1") + "...";

  const buttonText = disclaimerVisible
    ? t("hide-whole-disclaimer")
    : t("show-whole-disclaimer");

  const buttonAction = disclaimerVisible
    ? () => setDisclaimerVisible(false)
    : () => setDisclaimerVisible(true);

  return (
    <p className="text-gray-secondary cursor-pointer">
      {disclaimerText}
      <span onClick={buttonAction} className="underline pl-1">
        {buttonText}
      </span>
    </p>
  );
}
