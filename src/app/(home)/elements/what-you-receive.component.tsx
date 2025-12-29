import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FEATURES } from "../home.constants";

export default async function WhatYouReceive() {
  const t = await getTranslations("HomeModule.WhatYouReceive");

  return (
    <section className="py-8 mt-8 max-md:px-6">
      <h2 className="text-2xl phone-screen:text-pre-big font-bold text-midnight-blue md:text-center leading-textline-2xl phone-screen:leading-10">
        {t("title")}
      </h2>
      <ul className="grid grid-cols-1 mt-6 md:mt-8 max-md:gap-y-6 md:gap-x-6! md:grid-cols-5">
        {FEATURES.map(({ iconSrc, titleKey, textKey }) => (
          <FeatureItem
            key={titleKey}
            {...{
              iconSrc,
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
  iconSrc,
  title,
  text,
}: {
  iconSrc: string;
  title: string;
  text: string;
}) {
  return (
    <li className="flex md:flex-col md:items-center">
      <div className="relative flex items-center justify-center shrink-0 bg-green-accent rounded-full p-4 box-content size-4">
        <Image
          className="absolute"
          src={iconSrc}
          alt=""
          width={22.4}
          height={33.6}
        />
      </div>

      <div className="max-md:ml-4">
        <h3 className="md:mt-4 font-semibold text-midnight-blue md:text-center">
          {title}
        </h3>
        <p className="md:text-center mt-1 text-sm text-gray-secondary leading-textline-secondary">
          {text}
        </p>
      </div>
    </li>
  );
}
