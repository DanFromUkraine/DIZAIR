import { Button } from "@heroui/button";
import { getTranslations } from "next-intl/server";

export default async function StartPersonalityTest() {
    const t = await getTranslations("HomeModule.Header");

    return <Button>{t("start-test")}</Button>;
}
