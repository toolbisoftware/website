// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { InitOptions } from "i18next";

export const FALLBACK_LOCALE = "en";
export const LANGUAGE_COOKIE = "language";
export const supportedLocales = ["en", "es"] as const;
export type Locales = (typeof supportedLocales)[number];

export function getOptions(lang = FALLBACK_LOCALE, ns = "common"): InitOptions {
  return {
    supportedLngs: supportedLocales,
    fallbackLng: FALLBACK_LOCALE,
    lng: lang,
    ns
  };
}
