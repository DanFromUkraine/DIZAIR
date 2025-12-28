import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

type ServerSideProvidersProps = Readonly<{
    children: ReactNode;
}>;

export default function ServerSideProviders({
    children,
}: ServerSideProvidersProps) {
    return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
