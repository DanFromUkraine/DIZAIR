import { Button } from "@heroui/button";
import { getTranslations } from "next-intl/server";

export default async function SignInBtn() {
    const t = await getTranslations("HomeModule.Header");
    return (
        <Button
            variant="bordered"
            className="border-1 mx-4 border-green-accent font-bold rounded-normal text-green-accent"
        >
            {t("sign-in")}
        </Button>
    );
}
