// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

"use client";

import { createContext, useContext } from "react";
import { FALLBACK_LOCALE, Locales } from "../i18n/options";

const Context = createContext<Locales>(FALLBACK_LOCALE);

export function LocaleProvider({
  value,
  children
}: {
  value: Locales;
  children: React.ReactNode;
}) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useLocale() {
  return useContext(Context);
}
