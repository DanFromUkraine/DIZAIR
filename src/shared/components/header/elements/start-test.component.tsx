"use client";

import { Button } from "@heroui/react";
import { useTranslations } from "next-intl";

export default function StartPersonalityTest() {
  const t = useTranslations("HomeModule");

  return (
    <Button className="bg-green-accent hover:brightness-95 data-[hover=true]:opacity-100! text-white font-bold rounded-normal!">
      {t("start-test")}
    </Button>
  );
}
