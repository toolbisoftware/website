// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

import type { Metadata } from "next";
import "./main.css";

export const metadata: Metadata = {};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
