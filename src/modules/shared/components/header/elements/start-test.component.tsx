import { Button } from "@heroui/button";
import { getTranslations } from "next-intl/server";

export default async function StartPersonalityTest() {
    const t = await getTranslations("HomeModule.Header");

    return (
        <Button className="bg-green-accent hover:brightness-95 data-[hover=true]:opacity-100! text-white font-bold rounded-normal!">
            {t("start-test")}
        </Button>
    );
}
