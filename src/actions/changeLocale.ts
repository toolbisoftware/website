// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

"use server";

import { LANGUAGE_COOKIE, Locales } from "@/i18n/options";
import { cookies } from "next/headers";

export async function changeLocaleAction(value: Locales) {
  cookies().set(LANGUAGE_COOKIE, value);

  return {
    status: "success"
  };
}
