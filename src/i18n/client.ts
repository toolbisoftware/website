// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

"use client";

import { useLocale } from "@/hooks/LocaleProvider";
import i18next, { i18n } from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { useEffect } from "react";
import { initReactI18next, useTranslation as useT } from "react-i18next";
import {
  LANGUAGE_COOKIE,
  Locales,
  getOptions,
  supportedLocales
} from "./options";

const isServer = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .use(
    resourcesToBackend(
      (lang: string, ns: string) => import(`./locales/${lang}/${ns}.json`)
    )
  )
  .init({
    ...getOptions(),
    detection: {
      order: ["cookie"],
      lookupCookie: LANGUAGE_COOKIE,
      caches: ["cookie"]
    },
    preload: isServer ? supportedLocales : [],
    lng: undefined
  });

function translation(i18n: i18n, lang: Locales) {
  useEffect(() => {
    if (!lang || i18n.resolvedLanguage === lang) {
      return;
    }

    i18n.changeLanguage(lang);
  }, [lang, i18n]);
}

export function useTranslation(ns: string) {
  const lang = useLocale();
  const translator = useT(ns);
  const { i18n } = translator;

  if (isServer && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  } else {
    translation(i18n, lang);
  }

  return translator;
}
