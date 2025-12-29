import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function RightsNote() {
  const t = await getTranslations("footer");
  return (
    <p className="pt-6 pb-2 text-center text-sm text-gray-secondary">
      {t("rights-note")}
    </p>
  );
}
