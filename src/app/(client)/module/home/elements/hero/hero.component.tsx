import { getTranslations } from "next-intl/server";

export default async function Hero() {
    const t = await getTranslations("HomeModule");

    return <h1></h1>;
}
