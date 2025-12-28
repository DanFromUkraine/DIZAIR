import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { ReactNode } from "react";

export const BENEFITS: Benefit[] = [
  {
    imgSrc: "/find-your-type.svg",
    titleKey: "Benefit1.title",
    subtitleKey: "Benefit1.subtitle",
    isTopOne: true,
  },
  {
    imgSrc: "/get-insights.svg",
    titleKey: "Benefit2.title",
    subtitleKey: "Benefit2.subtitle",
    isTopOne: false,
  },
];

export default function BenefitsContainer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-8">
      {BENEFITS.map((b) => (
        <Benefit key={b.titleKey} {...b} />
      ))}
    </section>
  );
}

interface Benefit {
  imgSrc: string;
  titleKey: string;
  subtitleKey: string;
  isTopOne: boolean;
}

async function Benefit({ imgSrc, titleKey, subtitleKey, isTopOne }: Benefit) {
  const t = await getTranslations("HomeModule.Benefits");

  return (
    <div className={clsx("f-col items-center p-8 gap-6")}>
      <Title className={clsx("hidden", { "max-md:flex": isTopOne })}>
        {t(titleKey)}
      </Title>
      <Image src={imgSrc} alt="icon" width={280} height={280} />
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
}: {
  className?: string;
  children: ReactNode;
}) {
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
