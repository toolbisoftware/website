// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { getLocale } from "@/i18n/server";
import Layout from "@/layouts/Root";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./main.css";
import Providers from "./providers";

const afacad = localFont({
  src: [
    { path: "../public/assets/fonts/Afacad.woff2", style: "normal" },
    { path: "../public/assets/fonts/Afacad-Italic.woff2", style: "italic" }
  ],
  variable: "--font-primary"
});

export const metadata: Metadata = {};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = getLocale();

  return (
    <html
      lang={locale}
      className={`${afacad.variable}`}
    >
      <body>
        <Providers locale={locale}>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
