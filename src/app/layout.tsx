import type { Metadata } from "next";
import Header from "../shared/components/header/header.component";
import ClientSideProviders from "../shared/providers/clientSideProviders";
import ServerSideProviders from "../shared/providers/serverSideProviders";
import { Inter } from "next/font/google";
import "@/src/styles/main.css";

export const metadata: Metadata = {
  title: "Test assessment for DIZAIR",
  description: "Example site. Landing implementation of ",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const fontInstance = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={fontInstance.className}>
        <ClientSideProviders>
          <ServerSideProviders>
            <Header />
            {children}
          </ServerSideProviders>
        </ClientSideProviders>
      </body>
    </html>
  );
}
