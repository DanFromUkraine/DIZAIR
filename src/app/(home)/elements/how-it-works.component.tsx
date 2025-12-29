import StartPersonalityTest from "@/src/shared/components/simpleOnes/start-test.component";
import { getTranslations } from "next-intl/server";
import { STEPS } from "../home.constants";

export default async function HowItWorks() {
  const t = await getTranslations("HomeModule");

  return (
    <section className="surface-light max-md:rounded-none! w-full p-8 pt-10 mt-8 ">
      <h2 className="text-5xl leading-tight md:text-large tracking-tight mb-10">
        {t("HowItWorks.title")}
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {STEPS.map((step, i) => (
          <StepItem
            key={step.titleKey}
            index={i + 1}
            title={t(step.titleKey)}
            text={t(step.textKey)}
          />
        ))}
      </ul>

      <StartPersonalityTest className="big-btn-spacing mt-10 text-pre-xl leading-7 h-auto max-md:w-full" />
    </section>
  );
}

function StepItem({
  title,
  text,
  index,
}: Readonly<{
  title: string;
  text: string;
  index: number;
}>) {
  return (
    <li className="flex max-md:gap-4 md:flex-col">
      <h4 className="p-6 text-gray-secondary rounded-full size-14 md:size-18! flex items-center font-bold justify-center text-xl md:text-pre-big border-2 border-gray-light-v2 bg-white">
        {index + 1}
      </h4>
      <div className="flex flex-col md:gap-2">
        <h3 className="text-xl leading-inherit! md:text-2xl md:mt-4 text-midnight-blue">
          {title}
        </h3>
        <p className="mt-2 text-gray-secondary">{text}</p>
      </div>
    </li>
  );
}
