"use client";

import { Button } from "@heroui/button";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export default function StartPersonalityTest({
  className,
}: Readonly<{
  className?: string;
}>) {
  const t = useTranslations();

  return (
    <Button
      disableAnimation
      className={clsx(
        "btn-primary w-fit box-border data-[hover=true]:opacity-100! hover:brightness-95",
        className,
      )}
    >
      {t("start-test")}
    </Button>
  );
}
