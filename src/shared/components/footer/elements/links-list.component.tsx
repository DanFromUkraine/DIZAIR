import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FOOTER_LINKS } from "@/src/shared/components/footer/footer.constants";

export default async function LinksList() {
  const t = await getTranslations();

  return (
    <ul className="grid grid-cols-2 gap-y-2 xl:grid-cols-3">
      {FOOTER_LINKS.map((l) => (
        <Link
          key={l.tKey}
          href={l.href}
          className="text-sm text-gray-secondary"
        >
          {t(l.tKey)}
        </Link>
      ))}
    </ul>
  );
}
