import { FEATURES } from "@/src/app/(home)/home.constants";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

export default async function WhatYouReceive() {
  const t = await getTranslations("HomeModule.WhatYouReceive");

  return (
    <section className="py-8 mt-8 max-md:px-6">
      <h2 className="text-2xl phone-screen:text-pre-big font-bold text-midnight-blue md:text-center leading-textline-2xl phone-screen:leading-10">
        {t("title")}
      </h2>
      <ul className="grid grid-cols-1 mt-6 md:mt-8 max-md:gap-y-6 md:gap-x-6! md:grid-cols-5">
        {FEATURES.map(({ Icon, titleKey, textKey }) => (
          <FeatureItem
            key={titleKey}
            {...{
              Icon,
              title: t(titleKey),
              text: t(textKey),
            }}
          />
        ))}
      </ul>
    </section>
  );
}

function FeatureItem({
  Icon,
  title,
  text,
}: Readonly<{
  Icon: (p: unknown) => ReactNode;
  title: string;
  text: string;
}>) {
  return (
    <li className="flex md:flex-col md:items-center">
      <div className="flex items-center justify-center shrink-0 bg-green-accent rounded-full size-12">
        <Icon />
      </div>

      <div className="max-md:ml-4 *:md:text-center">
        <h3 className="md:mt-4 font-semibold text-midnight-blue ">{title}</h3>
        <p className=" mt-1 text-sm text-gray-secondary leading-textline-secondary">
          {text}
        </p>
      </div>
    </li>
  );
}
