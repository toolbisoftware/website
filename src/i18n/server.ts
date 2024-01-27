// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { cookies } from "next/headers";
import { initReactI18next } from "react-i18next/initReactI18next";
import {
  FALLBACK_LOCALE,
  LANGUAGE_COOKIE,
  Locales,
  getOptions
} from "./options";

async function init(lang: Locales, namespace: string) {
  const instance = createInstance();
  await instance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (lang: string, ns: string) => import(`./locales/${lang}/${ns}.json`)
      )
    )
    .init(getOptions(lang, namespace));

  return instance;
}

export function getLocale() {
  return (cookies().get(LANGUAGE_COOKIE)?.value ?? FALLBACK_LOCALE) as Locales;
}

export async function createTranslation(ns: string) {
  const lang = getLocale();
  const instance = await init(lang, ns);

  return {
    t: instance.getFixedT(lang, Array.isArray(ns) ? ns[0] : ns)
  };
}
