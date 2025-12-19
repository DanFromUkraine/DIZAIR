import { Button } from "@heroui/button";
import { getTranslations } from "next-intl/server";

export default async function SignInBtn() {
    const t = await getTranslations("HomeModule.Header");
    return <Button variant="bordered">{t("sign-in")}</Button>;
}
