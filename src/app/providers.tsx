// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

"use client";

import { Locales } from "@/i18n/options";
import { LocaleProvider } from "@/providers/Locale";
import { ThemeProvider } from "next-themes";
import StyledComponents from "../providers/Styled";

export default function Providers({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: Locales;
}) {
  return (
    <LocaleProvider value={locale}>
      <StyledComponents>
        <ThemeProvider>{children}</ThemeProvider>
      </StyledComponents>
    </LocaleProvider>
  );
}
