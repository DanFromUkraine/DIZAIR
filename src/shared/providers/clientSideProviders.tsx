"use client";
import { ReactNode } from "react";
import { HeroUIProvider } from "@heroui/react";

type ClientSideProvidersProps = Readonly<{
    children: ReactNode;
}>;

export default function ClientSideProviders({
    children,
}: ClientSideProvidersProps) {
    return <HeroUIProvider>{children}</HeroUIProvider>;
}
