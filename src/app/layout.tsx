import type { Metadata } from "next";
import Header from "@/src/shared/components/header/header.component";
import ClientSideProviders from "@/src/shared/providers/clientSideProviders";
import ServerSideProviders from "@/src/shared/providers/serverSideProviders";
import { Inter } from "next/font/google";
import "@/src/styles/main.css";
import Footer from "@/src/shared/components/footer/footer.component";

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
            <Footer />
          </ServerSideProviders>
        </ClientSideProviders>
      </body>
    </html>
  );
}
