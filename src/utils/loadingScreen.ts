// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import { signal } from "@preact/signals-react";

export const loading = signal(true);
export const changing = signal(true);

export function triggerLoadingScreen(time: number): void {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, time);
}
