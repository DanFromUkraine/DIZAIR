import type { Metadata } from "next";
import "@/src/styles/main.css";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
    title: "Test assessment for DIZAIR",
    description: "Example site. Landing implementation of ",
};

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
