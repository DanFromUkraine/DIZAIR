"use client";

import { Button } from "@heroui/react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export default function SignInBtn({
  className,
}: Readonly<{ className?: string }>) {
  const t = useTranslations("baseRoutes");
  return (
    <Button
      disableAnimation
      variant="bordered"
      className={clsx("btn-outline", className)}
    >
      {t("sign-in")}
    </Button>
  );
}
