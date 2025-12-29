import StartPersonalityTest from "@/src/shared/components/ui/start-test.component";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="md:mt-8 bg-hero-accent md:rounded-2xl h-fit flex overflow-hidden max-md:flex-col">
      <HeroContent />
      <HeroImg />
    </section>
  );
}

async function HeroContent() {
  const t = await getTranslations("HomeModule");

  return (
    <div className="md:max-w-hero-info-block-desk p-8 md:p-12 md:pr-0 box-border flex flex-col gap-11">
      <div className="flex flex-col max-md:items-center">
        <h1 className="gap-2 max-md:text-center tracking-tight md:leading-17! leading-12 text-big md:text-large font-bold mb-4">
          {t("Hero.titleText1")}
          <span className="text-green-accent mx-2 md:mx-3">
            {t("Hero.titleTextAccent")}
          </span>
          {t("Hero.titleText2")}
        </h1>
        <p className="max-w-5/6 text-xl md:text-2xl leading-9 max-md:text-center">
          {t("Hero.subtitle")}
        </p>
      </div>

      <div className="flex flex-col gap-4 max-md:items-center">
        <StartPersonalityTest className="big-btn-spacing text-pre-xl leading-7 h-auto" />
        <p className="text-xs text-gray-secondary">{t("Hero.disclaimer")}</p>
      </div>
    </div>
  );
}

async function HeroImg() {
  const t = await getTranslations("HomeModule");

  return (
    <div className="flex w-full justify-center h-67.5 md:h-fit relative md:hidden lg:flex">
      <Image
        src="/hero.webp"
        alt={t("Hero.imageAlt")}
        priority
        width={280}
        height={580}
        className="absolute top-0 md:top-20 special-shadow max-md:w-hero-img-phone-w "
      />
    </div>
  );
}
