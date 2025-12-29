import type { BenefitProps } from "@/src/app/(home)/home";
import { BENEFITS } from "@/src/app/(home)/home.constants";
import { Translator } from "@/src/shared/types/i18n-global";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

export default async function BenefitsContainer() {
  const t = await getTranslations("HomeModule.Benefits");
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-8">
      {BENEFITS.map((b) => (
        <Benefit key={b.titleKey} {...b} t={t} />
      ))}
    </section>
  );
}

function Benefit({
  Icon,
  titleKey,
  subtitleKey,
  isTopOne,
  t,
}: BenefitProps & { t: Translator }) {
  return (
    <div className={clsx("f-col items-center p-8 gap-6")}>
      <Title className={clsx("hidden", { "max-md:flex": isTopOne })}>
        {t(titleKey)}
      </Title>
      <Icon />
      <div className="f-col gap-3">
        <Title className={clsx({ "max-md:hidden": isTopOne })}>
          {t(titleKey)}
        </Title>
        <p className="text-center text-charcoal text-pre-xl  ">
          {t(subtitleKey)}
        </p>
      </div>
    </div>
  );
}

function Title({
  className,
  children,
}: Readonly<{
  className?: string;
  children: ReactNode;
}>) {
  return (
    <h2
      className={clsx(
        "text-xl md:text-2xl font-bold text-center text-almost-black",
        className,
      )}
    >
      {children}
    </h2>
  );
}
