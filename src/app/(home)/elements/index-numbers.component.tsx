import { getTranslations } from "next-intl/server";

export default async function IndexNumbers() {
  const t = await getTranslations("HomeModule.IndexNumbers");

  return (
    <section className="w-full max-desktop-screen:flex-col IndexNumbers_spacing">
      <h2 className="text-charcoal px-8 grow py-10 leading-10 text-2xl md:text-pre-big surface-light">
        {t("title")}
      </h2>
      <div className="IndexNumbers_spacing">
        <div className="IndexNumbers_block surface-light">
          <h3>100</h3>
          <span>{t("block1Text")}</span>
        </div>
        <div className="IndexNumbers_block surface-light">
          <h3>300</h3>
          <span>{t("block2Text")}</span>
        </div>
      </div>
    </section>
  );
}
