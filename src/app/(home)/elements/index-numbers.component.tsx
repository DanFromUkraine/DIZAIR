import { getTranslations } from "next-intl/server";

export default async function IndexNumbers() {
  const t = await getTranslations("HomeModule.IndexNumbers");

  return (
    <section className="w-full flex max-desktop-screen:flex-col gap-4 md:gap-8 max-md:px-4">
      <h2 className="text-charcoal px-8 grow py-10 leading-10 text-2xl md:text-pre-big bg-gray-lighter rounded-2xl">
        {t("title")}
      </h2>
      <div className="flex gap-4 md:gap-8">
        <div className="py-8 px-6 w-full flex flex-col bg-gray-lighter rounded-2xl">
          <h3 className="text-5xl md:text-large leading-textline-large">100</h3>
          <span className="text-gray-secondary max-md:text-sm">
            {t("block1Text")}
          </span>
        </div>
        <div className="py-8 px-6 w-full flex flex-col bg-gray-lighter rounded-2xl">
          <h3 className="text-5xl md:text-large leading-textline-large">300</h3>
          <span className="text-gray-secondary max-md:text-sm">
            {t("block2Text")}
          </span>
        </div>
      </div>
    </section>
  );
}
